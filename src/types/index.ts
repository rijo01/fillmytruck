export interface Route {
  id: string
  company_name: string
  from_city: string
  to_city: string
  via_cities: string[]
  from_lat: number
  from_lng: number
  to_lat: number
  to_lng: number
  path_coords: [number, number][]
  available_pallets: number
  capacity_pallets: number
  weight_capacity_kg: number
  price_per_pallet: number
  departure_time: string
  estimated_arrival: string
  truck_type: 'standard' | 'refrigerated' | 'flatbed'
  status: 'active' | 'booked' | 'completed'
  rating_avg?: number
}

export interface Shipment {
  id: string
  from_city: string
  to_city: string
  pallets: number
  weight_kg: number
  pickup_window_start: string
  pickup_window_end: string
  budget_sek: number
  status: 'pending' | 'matched' | 'booked' | 'delivered'
}

export type Locale = 'sv' | 'en'
