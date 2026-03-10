'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import type { Locale } from '@/types'

export function Navbar() {
  const { t, locale, setLocale } = useI18n()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#2E3540]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1">
          <span
            className="font-display font-black text-xl uppercase tracking-wider text-[#F0ECE4]"
            style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
          >
            Fill<span className="text-[#C8451A]">My</span>Truck
          </span>
          <span
            className="text-sm font-body text-[#6B7280] ml-0.5"
            style={{ fontFamily: 'Barlow, sans-serif' }}
          >
            .se
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <NavLink href="#how">{t('nav.howItWorks')}</NavLink>
          <NavLink href="#routes">{t('nav.availableTrucks')}</NavLink>
          <NavLink href="#why">{t('nav.about')}</NavLink>
          <NavLink href="#match">{t('nav.postShipment')}</NavLink>
        </div>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Language switcher */}
          <div className="flex items-center gap-2 border border-[#2E3540] px-3 py-1.5">
            <button
              onClick={() => setLocale('sv')}
              className={`text-xl transition-opacity ${locale === 'sv' ? 'opacity-100' : 'opacity-30 hover:opacity-60'}`}
              title="Svenska"
            >
              🇸🇪
            </button>
            <div className="w-px h-4 bg-[#2E3540]" />
            <button
              onClick={() => setLocale('en')}
              className={`text-xl transition-opacity ${locale === 'en' ? 'opacity-100' : 'opacity-30 hover:opacity-60'}`}
              title="English"
            >
              🇬🇧
            </button>
          </div>

          <Link
            href="#match"
            className="btn-clip-sm bg-[#C8451A] hover:bg-[#D94F22] text-white font-body font-bold text-xs uppercase tracking-widest px-5 py-2.5 transition-colors"
            style={{ fontFamily: 'Barlow, sans-serif' }}
          >
            {t('nav.postTruck')}
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-[#F0ECE4] p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#111214] border-t border-[#2E3540] px-6 py-6 flex flex-col gap-5">
          <MobileNavLink href="#how" onClick={() => setMobileOpen(false)}>{t('nav.howItWorks')}</MobileNavLink>
          <MobileNavLink href="#routes" onClick={() => setMobileOpen(false)}>{t('nav.availableTrucks')}</MobileNavLink>
          <MobileNavLink href="#why" onClick={() => setMobileOpen(false)}>{t('nav.about')}</MobileNavLink>
          <MobileNavLink href="#match" onClick={() => setMobileOpen(false)}>{t('nav.postShipment')}</MobileNavLink>
          <div className="flex items-center gap-4 pt-2 border-t border-[#2E3540]">
            <button onClick={() => setLocale('sv')} className={locale === 'sv' ? 'opacity-100' : 'opacity-40'}>🇸🇪 Svenska</button>
            <button onClick={() => setLocale('en')} className={locale === 'en' ? 'opacity-100' : 'opacity-40'}>🇬🇧 English</button>
          </div>
          <Link
            href="#match"
            className="btn-clip bg-[#C8451A] text-white font-bold text-sm uppercase tracking-widest px-6 py-3 text-center"
            onClick={() => setMobileOpen(false)}
          >
            {t('nav.postTruck')}
          </Link>
        </div>
      )}
    </nav>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-[#6B7280] hover:text-[#F0ECE4] font-body font-semibold text-xs uppercase tracking-widest transition-colors"
      style={{ fontFamily: 'Barlow, sans-serif' }}
    >
      {children}
    </a>
  )
}

function MobileNavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-[#F0ECE4] font-body font-semibold text-base uppercase tracking-widest"
      style={{ fontFamily: 'Barlow, sans-serif' }}
    >
      {children}
    </a>
  )
}
