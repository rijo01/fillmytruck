'use client'

import { useState, useCallback, useRef } from 'react'
import { X, Star, Truck, Package, Clock, MapPin } from 'lucide-react'
import type { Route } from '@/types'
import { MOCK_ROUTES } from '@/lib/mockData'
import { useI18n } from '@/lib/i18n'

// Dynamic import for Mapbox (client-only)
let MapboxMap: React.ComponentType<any> | null = null
let Source: React.ComponentType<any> | null = null
let Layer: React.ComponentType<any> | null = null
let MapboxMarker: React.ComponentType<any> | null = null

if (typeof window !== 'undefined') {
  try {
    const reactMapGl = require('react-map-gl')
    MapboxMap = reactMapGl.Map
    Source = reactMapGl.Source
    Layer = reactMapGl.Layer
    MapboxMarker = reactMapGl.Marker
  } catch (e) {
    // Mapbox not available
  }
}

function TruckMarker({ route, onClick, isSelected }: { route: Route; onClick: () => void; isSelected: boolean }) {
  return (
    <button
      onClick={onClick}
      className={`relative transition-all duration-200 ${isSelected ? 'scale-150 z-10' : 'hover:scale-125'}`}
      title={`${route.from_city} → ${route.to_city}`}
    >
      <div className={`text-2xl drop-shadow-lg ${isSelected ? 'drop-shadow-[0_0_8px_rgba(200,69,26,0.8)]' : ''}`}>
        🚛
      </div>
      {/* Capacity bubble */}
      <div
        className="absolute -top-2 -right-2 bg-[#C8451A] text-white text-[9px] font-bold rounded-full w-5 h-5 flex items-center justify-center leading-none"
        style={{ fontFamily: 'Barlow, sans-serif' }}
      >
        {route.available_pallets}
      </div>
    </button>
  )
}

function TruckPanel({ route, onClose }: { route: Route; onClose: () => void }) {
  const { t } = useI18n()

  const truckTypeLabels: Record<string, string> = {
    standard: 'Standard',
    refrigerated: 'Kyltransport',
    flatbed: 'Flatbed',
  }

  const fillPercent = Math.round(((route.capacity_pallets - route.available_pallets) / route.capacity_pallets) * 100)

  return (
    <div className="absolute top-4 right-4 w-80 bg-[#111214] border border-[#2E3540] shadow-2xl z-20 overflow-hidden">
      {/* Header */}
      <div className="bg-[#1C1F24] border-b border-[#2E3540] px-5 py-4 flex items-start justify-between">
        <div>
          <div
            className="font-black text-[#F0ECE4] text-lg uppercase tracking-wide leading-none"
            style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
          >
            {route.from_city} → {route.to_city}
          </div>
          <div className="text-[#6B7280] text-xs mt-1" style={{ fontFamily: 'Barlow, sans-serif' }}>
            {route.company_name}
          </div>
        </div>
        <button
          onClick={onClose}
          className="text-[#6B7280] hover:text-[#F0ECE4] transition-colors ml-2 mt-0.5"
        >
          <X size={16} />
        </button>
      </div>

      {/* Body */}
      <div className="p-5 space-y-4">
        {/* Via stops */}
        {route.via_cities.length > 0 && (
          <div className="flex items-center gap-2">
            <MapPin size={13} className="text-[#C8451A] flex-shrink-0" />
            <span className="text-xs text-[#6B7280]" style={{ fontFamily: 'Barlow, sans-serif' }}>
              {t('routes.via')}: {route.via_cities.join(', ')}
            </span>
          </div>
        )}

        {/* Capacity */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="flex items-center gap-1.5 text-xs text-[#6B7280]" style={{ fontFamily: 'Barlow, sans-serif' }}>
              <Package size={13} className="text-[#C8451A]" />
              {t('routes.available_pallets')}
            </span>
            <span className="text-[#E8890C] font-bold text-sm" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
              {route.available_pallets} / {route.capacity_pallets}
            </span>
          </div>
          {/* Capacity bar */}
          <div className="h-1.5 bg-[#252A30] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#C8451A] rounded-full transition-all"
              style={{ width: `${fillPercent}%` }}
            />
          </div>
          <div className="text-right text-xs text-[#374151] mt-1" style={{ fontFamily: 'Barlow, sans-serif' }}>
            {fillPercent}% belagd
          </div>
        </div>

        {/* Info grid */}
        <div className="grid grid-cols-2 gap-3">
          <InfoItem icon={<Clock size={13} />} label="Avgång" value={new Date(route.departure_time).toLocaleTimeString('sv-SE', { hour: '2-digit', minute: '2-digit' })} />
          <InfoItem icon={<Truck size={13} />} label="Typ" value={truckTypeLabels[route.truck_type]} />
          <InfoItem icon={<Star size={13} />} label="Betyg" value={`${route.rating_avg}/5`} highlight />
          <InfoItem label="Vikt max" value={`${(route.weight_capacity_kg / 1000).toFixed(0)} ton`} />
        </div>

        {/* Price */}
        <div className="bg-[#1C1F24] border border-[#2E3540] px-4 py-3 flex items-center justify-between">
          <span className="text-xs text-[#6B7280] uppercase tracking-wide" style={{ fontFamily: 'Barlow, sans-serif' }}>
            Pris
          </span>
          <div className="text-right">
            <span
              className="text-[#C8451A] font-black text-2xl"
              style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
            >
              {route.price_per_pallet} kr
            </span>
            <span className="text-[#6B7280] text-xs ml-1" style={{ fontFamily: 'Barlow, sans-serif' }}>/{t('routes.price_per_pallet').split('/')[1]}</span>
          </div>
        </div>

        {/* Book button */}
        <button
          className="btn-clip w-full bg-[#C8451A] hover:bg-[#D94F22] text-white font-bold text-xs uppercase tracking-widest py-3 transition-colors"
          style={{ fontFamily: 'Barlow, sans-serif' }}
        >
          {t('routes.book_now')} →
        </button>
      </div>
    </div>
  )
}

function InfoItem({ icon, label, value, highlight }: { icon?: React.ReactNode; label: string; value: string; highlight?: boolean }) {
  return (
    <div className="bg-[#1C1F24] px-3 py-2.5">
      <div className="flex items-center gap-1 mb-1 text-[#6B7280]">
        {icon}
        <span className="text-xs uppercase tracking-wide" style={{ fontFamily: 'Barlow, sans-serif' }}>{label}</span>
      </div>
      <div className={`font-bold text-sm ${highlight ? 'text-[#E8890C]' : 'text-[#F0ECE4]'}`} style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
        {value}
      </div>
    </div>
  )
}

// Route list fallback (when no Mapbox token)
function RouteList({ routes, selectedRoute, onSelect }: { routes: Route[]; selectedRoute: Route | null; onSelect: (r: Route) => void }) {
  const { t } = useI18n()
  return (
    <div className="grid gap-px bg-[#2E3540] border border-[#2E3540]">
      {routes.map((route) => (
        <div
          key={route.id}
          className={`bg-[#111214] hover:bg-[#1C1F24] p-5 cursor-pointer transition-colors ${selectedRoute?.id === route.id ? 'border-l-2 border-[#C8451A]' : ''}`}
          onClick={() => onSelect(route)}
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="font-black text-[#F0ECE4] text-xl uppercase tracking-wide" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
                {route.from_city} → {route.to_city}
              </div>
              <div className="text-[#6B7280] text-xs mt-1" style={{ fontFamily: 'Barlow, sans-serif' }}>
                {route.company_name} · via {route.via_cities.join(', ')}
              </div>
            </div>
            <div className="text-right flex-shrink-0">
              <div className="text-[#C8451A] font-black text-2xl" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
                {route.price_per_pallet} kr
              </div>
              <div className="text-[#E8890C] text-xs font-bold">{route.available_pallets} pall ledigt</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export function MapSection() {
  const { t } = useI18n()
  const [selectedRoute, setSelectedRoute] = useState<Route | null>(null)
  const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN

  const routeGeoJSON = {
    type: 'FeatureCollection' as const,
    features: MOCK_ROUTES.map((route) => ({
      type: 'Feature' as const,
      properties: { id: route.id },
      geometry: {
        type: 'LineString' as const,
        coordinates: route.path_coords,
      },
    })),
  }

  return (
    <section id="routes" className="py-24 px-6 lg:px-10 max-w-7xl mx-auto">
      {/* Section header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[#C8451A] text-xs font-bold uppercase tracking-[0.2em]" style={{ fontFamily: 'Barlow, sans-serif' }}>
            {t('routes.tag')}
          </span>
          <span className="w-10 h-px bg-[#C8451A]" />
          <span className="flex items-center gap-1.5 text-xs text-[#6B7280]" style={{ fontFamily: 'Barlow, sans-serif' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            {MOCK_ROUTES.length} aktiva rutter
          </span>
        </div>
        <h2
          className="font-black uppercase leading-none mb-4"
          style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 'clamp(36px, 5vw, 64px)' }}
        >
          {t('routes.headline')}
        </h2>
        <p className="text-[#6B7280] text-lg max-w-md" style={{ fontFamily: 'Barlow, sans-serif' }}>
          {t('routes.sub')}
        </p>
      </div>

      {/* Map or route list */}
      {MAPBOX_TOKEN && MapboxMap ? (
        <div className="relative h-[600px] border border-[#2E3540] overflow-hidden">
          <MapboxMap
            mapboxAccessToken={MAPBOX_TOKEN}
            initialViewState={{ longitude: 13.5, latitude: 57.5, zoom: 4.5 }}
            style={{ width: '100%', height: '100%' }}
            mapStyle="mapbox://styles/mapbox/dark-v11"
          >
            {Source && Layer && (
              <Source id="routes" type="geojson" data={routeGeoJSON}>
                <Layer
                  id="route-lines-bg"
                  type="line"
                  paint={{ 'line-color': '#C8451A', 'line-width': 6, 'line-opacity': 0.15, 'line-blur': 4 }}
                />
                <Layer
                  id="route-lines"
                  type="line"
                  paint={{ 'line-color': '#C8451A', 'line-width': 2, 'line-opacity': 0.9, 'line-dasharray': [4, 2] }}
                />
              </Source>
            )}
            {MapboxMarker && MOCK_ROUTES.map((route) => (
              <MapboxMarker key={route.id} longitude={route.from_lng} latitude={route.from_lat} anchor="center">
                <TruckMarker
                  route={route}
                  onClick={() => setSelectedRoute(selectedRoute?.id === route.id ? null : route)}
                  isSelected={selectedRoute?.id === route.id}
                />
              </MapboxMarker>
            ))}
          </MapboxMap>
          {selectedRoute && (
            <TruckPanel route={selectedRoute} onClose={() => setSelectedRoute(null)} />
          )}
          {/* Map overlay gradient bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none" />
        </div>
      ) : (
        <div>
          <div className="bg-[#1C1F24] border border-[#2E3540] px-5 py-3 mb-px flex items-center gap-2">
            <span className="text-xs text-[#6B7280]" style={{ fontFamily: 'Barlow, sans-serif' }}>
              ℹ️ Lägg till <code className="bg-[#252A30] px-1">NEXT_PUBLIC_MAPBOX_TOKEN</code> i .env.local för interaktiv karta
            </span>
          </div>
          <RouteList
            routes={MOCK_ROUTES}
            selectedRoute={selectedRoute}
            onSelect={(r) => setSelectedRoute(selectedRoute?.id === r.id ? null : r)}
          />
          {selectedRoute && (
            <div className="mt-4 relative">
              <TruckPanel route={selectedRoute} onClose={() => setSelectedRoute(null)} />
            </div>
          )}
        </div>
      )}
    </section>
  )
}
