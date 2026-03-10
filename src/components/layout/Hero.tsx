'use client'

import { useI18n } from '@/lib/i18n'

export function Hero() {
  const { t } = useI18n()

  const stats = [
    { num: t('hero.stat1_num'), label: t('hero.stat1_label') },
    { num: t('hero.stat2_num'), label: t('hero.stat2_label') },
    { num: t('hero.stat3_num'), label: t('hero.stat3_label') },
    { num: t('hero.stat4_num'), label: t('hero.stat4_label') },
  ]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-16 px-6 lg:px-10">
      {/* Background */}
      <div className="absolute inset-0 bg-industrial-lines" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#C8451A]/06 via-transparent to-transparent" />

      {/* Diagonal accent line */}
      <div
        className="absolute top-0 right-0 w-px h-full opacity-20"
        style={{ background: 'linear-gradient(to bottom, transparent, #C8451A, transparent)' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-3 mb-8 opacity-0"
            style={{ animation: 'fadeUp 0.7s ease 0.1s forwards', fontFamily: 'Barlow, sans-serif' }}
          >
            <span className="w-8 h-px bg-[#C8451A]" />
            <span className="text-[#C8451A] text-xs font-bold uppercase tracking-[0.2em]">
              {t('hero.badge')}
            </span>
          </div>

          {/* Headline */}
          <div
            className="mb-8 opacity-0"
            style={{ animation: 'fadeUp 0.7s ease 0.2s forwards' }}
          >
            <p
              className="text-[#6B7280] text-lg font-light mb-1 uppercase tracking-widest"
              style={{ fontFamily: 'Barlow, sans-serif' }}
            >
              {t('hero.headline1')}
            </p>
            <h1
              className="font-black uppercase leading-none mb-2"
              style={{
                fontFamily: 'Barlow Condensed, sans-serif',
                fontSize: 'clamp(72px, 12vw, 140px)',
                lineHeight: 0.88,
                letterSpacing: '-0.02em',
              }}
            >
              <span className="text-[#C8451A] block">{t('hero.headline2')}</span>
            </h1>
            <h2
              className="font-black uppercase text-[#F0ECE4]"
              style={{
                fontFamily: 'Barlow Condensed, sans-serif',
                fontSize: 'clamp(32px, 5vw, 60px)',
                letterSpacing: '-0.01em',
              }}
            >
              {t('hero.headline3')}
            </h2>
          </div>

          {/* Subheadline */}
          <p
            className="text-[#6B7280] text-lg leading-relaxed max-w-xl mb-12 opacity-0"
            style={{ animation: 'fadeUp 0.7s ease 0.3s forwards', fontFamily: 'Barlow, sans-serif' }}
            dangerouslySetInnerHTML={{ __html: t('hero.subheadline') }}
          />

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-4 mb-16 opacity-0"
            style={{ animation: 'fadeUp 0.7s ease 0.4s forwards' }}
          >
            <a
              href="#match"
              className="btn-clip inline-flex items-center gap-3 bg-[#C8451A] hover:bg-[#D94F22] text-white font-bold text-sm uppercase tracking-widest px-8 py-4 transition-all hover:-translate-y-px"
              style={{ fontFamily: 'Barlow, sans-serif' }}
            >
              <span className="text-base">🚛</span>
              {t('hero.cta_truck')}
            </a>
            <a
              href="#match"
              className="btn-clip inline-flex items-center gap-3 bg-transparent hover:bg-[#1C1F24] text-[#F0ECE4] font-bold text-sm uppercase tracking-widest px-8 py-4 border border-[#2E3540] hover:border-[#6B7280] transition-all"
              style={{ fontFamily: 'Barlow, sans-serif' }}
            >
              <span className="text-base">📦</span>
              {t('hero.cta_freight')}
            </a>
          </div>

          {/* Stats bar */}
          <div
            className="grid grid-cols-2 lg:grid-cols-4 border border-[#2E3540] opacity-0"
            style={{ animation: 'fadeUp 0.7s ease 0.5s forwards' }}
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`px-6 py-5 ${i < stats.length - 1 ? 'border-r border-[#2E3540]' : ''} ${i >= 2 ? 'border-t border-[#2E3540] lg:border-t-0' : ''}`}
              >
                <div
                  className="font-black text-3xl text-[#C8451A] leading-none mb-1"
                  style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                >
                  {stat.num}
                </div>
                <div
                  className="text-xs text-[#6B7280] uppercase tracking-wide"
                  style={{ fontFamily: 'Barlow, sans-serif' }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating truck emoji (decorative) */}
      <div
        className="absolute right-10 top-1/2 -translate-y-1/2 hidden xl:block select-none pointer-events-none opacity-5"
        style={{ fontSize: '280px', transform: 'translateY(-50%) scaleX(-1)' }}
      >
        🚛
      </div>
    </section>
  )
}
