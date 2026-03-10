'use client'

import { useState } from 'react'
import { useI18n } from '@/lib/i18n'

type Tab = 'truck' | 'freight'

const MATCH_RESULTS = [
  {
    route: 'Oslo → Köpenhamn',
    via: 'Via Göteborg · Malmö',
    company: 'Nordisk Transport AB',
    pallets: 34,
    price: '3 800 kr',
    rating: 4.8,
  },
  {
    route: 'Oslo → Göteborg',
    via: 'Via E6 · Direkt',
    company: 'Svensson Frakt',
    pallets: 18,
    price: '2 200 kr',
    rating: 4.6,
  },
  {
    route: 'Göteborg → Hamburg',
    via: 'Via Helsingborg · Malmö',
    company: 'Baltic Express',
    pallets: 28,
    price: '5 100 kr',
    rating: 4.9,
  },
]

export function MatchForm() {
  const { t } = useI18n()
  const [tab, setTab] = useState<Tab>('truck')
  const [loading, setLoading] = useState(false)
  const [showResults, setShowResults] = useState(false)

  const handleSearch = () => {
    setLoading(true)
    setShowResults(false)
    setTimeout(() => {
      setLoading(false)
      setShowResults(true)
    }, 900)
  }

  return (
    <section id="match" className="bg-[#111214] border-t border-b border-[#2E3540] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[#C8451A] text-xs font-bold uppercase tracking-[0.2em]" style={{ fontFamily: 'Barlow, sans-serif' }}>
              {t('form.tag')}
            </span>
            <span className="w-10 h-px bg-[#C8451A]" />
          </div>
          <h2
            className="font-black uppercase leading-none mb-4"
            style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 'clamp(36px, 5vw, 64px)' }}
          >
            {t('form.headline')}
          </h2>
          <p className="text-[#6B7280] text-lg max-w-md" style={{ fontFamily: 'Barlow, sans-serif' }}>
            {t('form.sub')}
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex border-b border-[#2E3540] mb-10">
          <TabBtn active={tab === 'truck'} onClick={() => { setTab('truck'); setShowResults(false) }}>
            🚛 {t('form.truck_tab')}
          </TabBtn>
          <TabBtn active={tab === 'freight'} onClick={() => { setTab('freight'); setShowResults(false) }}>
            📦 {t('form.freight_tab')}
          </TabBtn>
        </div>

        {/* Forms */}
        {tab === 'truck' ? (
          <TruckForm t={t} onSearch={handleSearch} />
        ) : (
          <FreightForm t={t} onSearch={handleSearch} />
        )}

        {/* Loading */}
        {loading && (
          <div className="mt-10 flex items-center gap-3 text-[#6B7280]" style={{ fontFamily: 'Barlow, sans-serif' }}>
            <div className="w-4 h-4 border-2 border-[#C8451A] border-t-transparent rounded-full animate-spin" />
            <span className="text-sm">Söker matchningar...</span>
          </div>
        )}

        {/* Results */}
        {showResults && (
          <div className="mt-10 animate-fade-up">
            <div className="border border-[#2E3540] overflow-hidden">
              {/* Results header */}
              <div className="bg-[#1C1F24] border-b border-[#2E3540] px-5 py-3 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-[#6B7280]" style={{ fontFamily: 'Barlow, sans-serif' }}>
                  Aktiva matchningar
                </span>
                <span className="btn-clip-sm bg-[#C8451A] text-white text-xs font-bold px-3 py-1 uppercase tracking-wide">
                  {MATCH_RESULTS.length} hittades
                </span>
              </div>

              {/* Column headers */}
              <div className="grid grid-cols-5 border-b border-[#2E3540] bg-[#252A30]/50">
                {['Rutt', 'Åkeri', 'Kapacitet', 'Pris', ''].map((h, i) => (
                  <div key={i} className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#374151]" style={{ fontFamily: 'Barlow, sans-serif' }}>
                    {h}
                  </div>
                ))}
              </div>

              {/* Result rows */}
              {MATCH_RESULTS.map((result, i) => (
                <div
                  key={i}
                  className="grid grid-cols-5 border-b border-[#2E3540] last:border-0 hover:bg-[#1C1F24] transition-colors cursor-pointer group"
                >
                  <div className="px-5 py-4">
                    <div className="font-black text-[#F0ECE4] text-sm uppercase tracking-wide" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
                      {result.route}
                    </div>
                    <div className="text-xs text-[#6B7280] mt-0.5" style={{ fontFamily: 'Barlow, sans-serif' }}>
                      {result.via}
                    </div>
                  </div>
                  <div className="px-5 py-4">
                    <div className="text-sm font-semibold text-[#F0ECE4]" style={{ fontFamily: 'Barlow, sans-serif' }}>
                      {result.company}
                    </div>
                    <div className="text-xs text-[#E8890C]">★ {result.rating}</div>
                  </div>
                  <div className="px-5 py-4 flex items-center">
                    <span className="text-[#E8890C] font-bold text-sm" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
                      {result.pallets} pall
                    </span>
                  </div>
                  <div className="px-5 py-4 flex items-center">
                    <span className="text-[#C8451A] font-black text-xl" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
                      {result.price}
                    </span>
                  </div>
                  <div className="px-5 py-4 flex items-center">
                    <span className="truck-badge text-[10px] group-hover:bg-[#C8451A] group-hover:text-white group-hover:border-[#C8451A] transition-colors cursor-pointer">
                      MATCH
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-[#374151] mt-3" style={{ fontFamily: 'Barlow, sans-serif' }}>
              👆 Registrera ett konto för att se kontaktuppgifter och boka direkt.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

function TabBtn({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-4 font-bold text-sm uppercase tracking-wide border-b-2 transition-colors -mb-px ${
        active
          ? 'text-[#F0ECE4] border-[#C8451A]'
          : 'text-[#6B7280] border-transparent hover:text-[#F0ECE4]'
      }`}
      style={{ fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.06em' }}
    >
      {children}
    </button>
  )
}

function FormField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-bold uppercase tracking-widest text-[#6B7280]" style={{ fontFamily: 'Barlow, sans-serif' }}>
        {label}
      </label>
      {children}
    </div>
  )
}

function TruckForm({ t, onSearch }: { t: (k: string) => string; onSearch: () => void }) {
  return (
    <div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <FormField label={t('form.from_city')}>
          <input type="text" placeholder="Oslo" className="px-4 py-3 text-sm" />
        </FormField>
        <FormField label={t('form.to_city')}>
          <input type="text" placeholder="Köpenhamn" className="px-4 py-3 text-sm" />
        </FormField>
        <FormField label={t('form.via')}>
          <input type="text" placeholder="Göteborg, Malmö" className="px-4 py-3 text-sm" />
        </FormField>
        <FormField label={t('form.capacity')}>
          <input type="number" placeholder="34" className="px-4 py-3 text-sm" />
        </FormField>
        <FormField label={t('form.date')}>
          <input type="date" className="px-4 py-3 text-sm" />
        </FormField>
        <FormField label={t('form.min_price')}>
          <input type="number" placeholder="3 500" className="px-4 py-3 text-sm" />
        </FormField>
      </div>
      <button
        onClick={onSearch}
        className="btn-clip bg-[#C8451A] hover:bg-[#D94F22] text-white font-bold text-sm uppercase tracking-widest px-8 py-4 transition-colors hover:-translate-y-px"
        style={{ fontFamily: 'Barlow, sans-serif' }}
      >
        ⚡ {t('form.find_matches')}
      </button>
    </div>
  )
}

function FreightForm({ t, onSearch }: { t: (k: string) => string; onSearch: () => void }) {
  return (
    <div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <FormField label={t('form.pickup_city')}>
          <input type="text" placeholder="Göteborg" className="px-4 py-3 text-sm" />
        </FormField>
        <FormField label={t('form.delivery_city')}>
          <input type="text" placeholder="Malmö" className="px-4 py-3 text-sm" />
        </FormField>
        <FormField label={t('form.pallets')}>
          <input type="number" placeholder="12" className="px-4 py-3 text-sm" />
        </FormField>
        <FormField label={t('form.weight')}>
          <input type="number" placeholder="3 200" className="px-4 py-3 text-sm" />
        </FormField>
        <FormField label={t('form.pickup_time')}>
          <input type="time" className="px-4 py-3 text-sm" />
        </FormField>
        <FormField label={t('form.budget')}>
          <input type="number" placeholder="2 800" className="px-4 py-3 text-sm" />
        </FormField>
      </div>
      <button
        onClick={onSearch}
        className="btn-clip bg-[#C8451A] hover:bg-[#D94F22] text-white font-bold text-sm uppercase tracking-widest px-8 py-4 transition-colors"
        style={{ fontFamily: 'Barlow, sans-serif' }}
      >
        🔍 {t('form.search_trucks')}
      </button>
    </div>
  )
}
