'use client'

import { useI18n } from '@/lib/i18n'

export function HowItWorks() {
  const { t } = useI18n()

  const steps = [
    {
      num: '01',
      icon: '🗺️',
      title: t('how.step1_title'),
      desc: t('how.step1_desc'),
    },
    {
      num: '02',
      icon: '⚡',
      title: t('how.step2_title'),
      desc: t('how.step2_desc'),
    },
    {
      num: '03',
      icon: '💰',
      title: t('how.step3_title'),
      desc: t('how.step3_desc'),
    },
  ]

  return (
    <section id="how" className="py-24 px-6 lg:px-10 max-w-7xl mx-auto">
      {/* Section header */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[#C8451A] text-xs font-bold uppercase tracking-[0.2em]" style={{ fontFamily: 'Barlow, sans-serif' }}>
            {t('how.tag')}
          </span>
          <span className="w-10 h-px bg-[#C8451A]" />
        </div>
        <h2
          className="font-black uppercase leading-none mb-4"
          style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 'clamp(36px, 5vw, 64px)' }}
        >
          {t('how.headline')}
        </h2>
        <p className="text-[#6B7280] text-lg max-w-md" style={{ fontFamily: 'Barlow, sans-serif' }}>
          {t('how.sub')}
        </p>
      </div>

      {/* Steps grid */}
      <div className="grid md:grid-cols-3 gap-px bg-[#2E3540] border border-[#2E3540]">
        {steps.map((step) => (
          <div
            key={step.num}
            className="group relative bg-[#111214] hover:bg-[#1C1F24] p-10 overflow-hidden transition-colors duration-200"
          >
            {/* Left accent bar */}
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#C8451A] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

            {/* Step number (background) */}
            <div
              className="absolute top-4 right-6 font-black leading-none select-none pointer-events-none"
              style={{
                fontFamily: 'Barlow Condensed, sans-serif',
                fontSize: '100px',
                color: '#252A30',
                lineHeight: 1,
              }}
            >
              {step.num}
            </div>

            {/* Content */}
            <div className="relative z-10">
              <span className="text-4xl mb-6 block">{step.icon}</span>
              <h3
                className="font-bold uppercase tracking-wide text-xl mb-4 text-[#F0ECE4]"
                style={{ fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.04em' }}
              >
                {step.title}
              </h3>
              <p className="text-[#6B7280] text-sm leading-relaxed" style={{ fontFamily: 'Barlow, sans-serif' }}>
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
