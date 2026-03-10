'use client'

import Link from 'next/link'
import { useI18n } from '@/lib/i18n'

export function Footer() {
  const { t } = useI18n()

  return (
    <footer className="bg-[#0A0A0A] border-t border-[#2E3540]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Main footer */}
        <div className="py-16 grid md:grid-cols-4 gap-10 border-b border-[#2E3540]">
          {/* Brand */}
          <div className="md:col-span-1">
            <div
              className="font-black text-2xl uppercase tracking-wider text-[#F0ECE4] mb-3"
              style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
            >
              Fill<span className="text-[#C8451A]">My</span>Truck<span className="text-[#6B7280] font-normal text-base">.se</span>
            </div>
            <p className="text-[#6B7280] text-sm leading-relaxed" style={{ fontFamily: 'Barlow, sans-serif' }}>
              {t('footer.tagline')}
            </p>
            <div className="flex items-center gap-3 mt-6">
              <SocialLink href="https://linkedin.com" label="LinkedIn">in</SocialLink>
              <SocialLink href="https://twitter.com" label="X">𝕏</SocialLink>
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#F0ECE4] mb-4" style={{ fontFamily: 'Barlow, sans-serif' }}>
              {t('footer.nav_title')}
            </h4>
            <ul className="space-y-2.5">
              {[
                { href: '#how', label: t('nav.howItWorks') },
                { href: '#routes', label: t('nav.availableTrucks') },
                { href: '#match', label: t('nav.postTruck') },
                { href: '#match', label: t('nav.postShipment') },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-[#6B7280] hover:text-[#F0ECE4] text-sm transition-colors" style={{ fontFamily: 'Barlow, sans-serif' }}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#F0ECE4] mb-4" style={{ fontFamily: 'Barlow, sans-serif' }}>
              {t('footer.company_title')}
            </h4>
            <ul className="space-y-2.5">
              {[
                t('footer.about'),
                t('footer.faq'),
                t('footer.press'),
                t('footer.careers'),
              ].map((label) => (
                <li key={label}>
                  <a href="#" className="text-[#6B7280] hover:text-[#F0ECE4] text-sm transition-colors" style={{ fontFamily: 'Barlow, sans-serif' }}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#F0ECE4] mb-4" style={{ fontFamily: 'Barlow, sans-serif' }}>
              {t('footer.contact_title')}
            </h4>
            <ul className="space-y-2.5">
              {[
                { href: 'mailto:hello@fillmytruck.se', label: 'hello@fillmytruck.se' },
                { href: 'tel:+46700000000', label: '+46 70 000 00 00' },
                { href: '#', label: 'Stockholm, Sverige' },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-[#6B7280] hover:text-[#F0ECE4] text-sm transition-colors" style={{ fontFamily: 'Barlow, sans-serif' }}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[#374151] text-xs" style={{ fontFamily: 'Barlow, sans-serif' }}>
            © 2025 FillMyTruck.se — {t('footer.rights')}
          </p>
          <div className="flex items-center gap-6">
            {['Integritetspolicy', 'Användarvillkor', 'Cookies'].map((item) => (
              <a key={item} href="#" className="text-[#374151] hover:text-[#6B7280] text-xs transition-colors" style={{ fontFamily: 'Barlow, sans-serif' }}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-8 h-8 border border-[#2E3540] hover:border-[#C8451A] flex items-center justify-center text-[#6B7280] hover:text-[#C8451A] text-sm font-bold transition-colors"
    >
      {children}
    </a>
  )
}
