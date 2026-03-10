'use client'

import { useI18n } from '@/lib/i18n'

export function CtaBand() {
  const { t } = useI18n()

  return (
    <section className="relative overflow-hidden bg-[#C8451A] py-20 px-6 lg:px-10 text-center">
      {/* Diagonal stripes */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(0,0,0,0.06) 20px, rgba(0,0,0,0.06) 21px)',
        }}
      />
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-white/20" />
      <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-white/20" />

      <div className="relative z-10 max-w-3xl mx-auto">
        <h2
          className="font-black uppercase text-white leading-none mb-4"
          style={{
            fontFamily: 'Barlow Condensed, sans-serif',
            fontSize: 'clamp(48px, 8vw, 88px)',
            letterSpacing: '-0.01em',
          }}
        >
          {t('cta.headline1')}<br />{t('cta.headline2')}
        </h2>
        <p
          className="text-white/75 text-lg mb-10"
          style={{ fontFamily: 'Barlow, sans-serif' }}
        >
          {t('cta.sub')}
        </p>
        <a
          href="#match"
          className="inline-flex items-center gap-3 bg-white text-[#C8451A] font-black text-sm uppercase tracking-widest px-10 py-5 hover:-translate-y-1 transition-transform"
          style={{
            fontFamily: 'Barlow, sans-serif',
            clipPath: 'polygon(14px 0%, 100% 0%, calc(100% - 14px) 100%, 0% 100%)',
          }}
        >
          🚛 {t('cta.button')}
        </a>
      </div>
    </section>
  )
}
