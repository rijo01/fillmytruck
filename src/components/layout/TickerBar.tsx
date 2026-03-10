'use client'

import { useI18n } from '@/lib/i18n'
import { TICKER_ROUTES } from '@/lib/mockData'

export function TickerBar() {
  const { t } = useI18n()
  const doubled = [...TICKER_ROUTES, ...TICKER_ROUTES]

  return (
    <div className="relative overflow-hidden bg-[#1C1F24] border-t-2 border-b border-[#2E3540]" style={{ borderTopColor: '#C8451A' }}>
      {/* Label */}
      <div className="absolute left-0 top-0 bottom-0 z-10 flex items-center bg-[#C8451A] px-4 whitespace-nowrap">
        <span
          className="text-white text-xs font-bold uppercase tracking-widest"
          style={{ fontFamily: 'Barlow, sans-serif' }}
        >
          🔴 {t('ticker.label')}
        </span>
      </div>

      {/* Scrolling ticker */}
      <div className="pl-48 overflow-hidden">
        <div
          className="flex gap-0 whitespace-nowrap"
          style={{ animation: 'ticker 35s linear infinite' }}
        >
          {doubled.map((route, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-2 px-8 py-3 border-r border-[#2E3540]"
            >
              <span className="w-2 h-2 rounded-full bg-[#C8451A] animate-pulse-dot flex-shrink-0" />
              <span
                className="text-[#F0ECE4] font-semibold text-sm uppercase tracking-wide"
                style={{ fontFamily: 'Barlow, sans-serif' }}
              >
                {route.from} → {route.to}
              </span>
              <span className="text-[#6B7280] text-xs">via {route.via}</span>
              <span className="text-[#E8890C] font-bold text-xs">{route.pallets} pall</span>
              <span className="text-[#374151] text-xs">· {route.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
