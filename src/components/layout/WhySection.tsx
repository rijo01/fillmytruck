'use client'

import { useI18n } from '@/lib/i18n'

export function WhySection() {
  const { t } = useI18n()

  const cards = [
    { num: '01', icon: '🚛', title: t('why.card1_title'), desc: t('why.card1_desc') },
    { num: '02', icon: '📦', title: t('why.card2_title'), desc: t('why.card2_desc') },
    { num: '03', icon: '🌍', title: t('why.card3_title'), desc: t('why.card3_desc') },
    { num: '04', icon: '⚡', title: t('why.card4_title'), desc: t('why.card4_desc') },
  ]

  return (
    <section id="why" className="py-24 px-6 lg:px-10 max-w-7xl mx-auto">
      {/* Section header */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[#C8451A] text-xs font-bold uppercase tracking-[0.2em]" style={{ fontFamily: 'Barlow, sans-serif' }}>
            {t('why.tag')}
          </span>
          <span className="w-10 h-px bg-[#C8451A]" />
        </div>
        <h2
          className="font-black uppercase leading-none"
          style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 'clamp(36px, 5vw, 64px)' }}
        >
          {t('why.headline')}
        </h2>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-px bg-[#2E3540] border border-[#2E3540]">
        {cards.map((card) => (
          <div key={card.num} className="relative group bg-[#111214] hover:bg-[#1C1F24] p-10 overflow-hidden transition-colors duration-200">
            {/* Bg number */}
            <div
              className="absolute top-4 right-6 font-black select-none pointer-events-none text-[#252A30]"
              style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '80px', lineHeight: 1 }}
            >
              {card.num}
            </div>
            {/* Hover accent */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-[#C8451A] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

            <span className="text-4xl mb-5 block">{card.icon}</span>
            <h3
              className="font-bold uppercase tracking-wide text-xl mb-3 text-[#F0ECE4]"
              style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
            >
              {card.title}
            </h3>
            <p className="text-[#6B7280] text-sm leading-relaxed" style={{ fontFamily: 'Barlow, sans-serif' }}>
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
