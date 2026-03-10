# FillMyTruck.se 🚛

> Den nordiska marknadsplatsen för returfrakter — Kör aldrig tom igen.

## Vad är FillMyTruck?

FillMyTruck löser ett av de största problemen i europeisk logistik: **tomkörning**.  
30% av alla lastbilar kör tomma. Det kostar branschen miljarder och skadar klimatet.

Plattformen fungerar som "Uber för returfrakter":
- **Åkerier** registrerar tomma rutter och tjänar extra pengar
- **Avsändare** bokar frakt till 30–50% under spotpris
- **FillMyTruck** tar 10% provision per bokning

## Stack

| Lager | Teknologi |
|-------|-----------|
| Frontend | Next.js 14, React 18, TailwindCSS |
| Karta | Mapbox GL JS (react-map-gl) |
| State | Zustand + React Query |
| Animationer | Framer Motion |
| Backend (framtida) | Node.js + Express + PostgreSQL/PostGIS |
| Auth (framtida) | JWT |
| Betalningar (framtida) | Stripe |

## Kom igång

### 1. Klona och installera

```bash
git clone https://github.com/DITT_REPO/fillmytruck.git
cd fillmytruck
npm install
```

### 2. Miljövariabler

```bash
cp .env.local.example .env.local
```

Redigera `.env.local`:

```env
# Hämta token från https://account.mapbox.com/
NEXT_PUBLIC_MAPBOX_TOKEN=pk.eyJ1IjoiZXhhbXBsZSIsImEiOiJleGFtcGxlIn0.example
```

> **Utan Mapbox-token:** Sajten fungerar med en listvvy istället för interaktiv karta.

### 3. Starta dev-server

```bash
npm run dev
```

Öppna [http://localhost:3000](http://localhost:3000)

## Deploy till Vercel

### Alternativ 1: GitHub → Vercel (rekommenderat)

1. Pusha koden till GitHub:
```bash
git init
git add .
git commit -m "Initial commit: FillMyTruck.se"
git remote add origin https://github.com/DITT_ORG/fillmytruck.git
git push -u origin main
```

2. Gå till [vercel.com](https://vercel.com) → New Project
3. Importera ditt GitHub-repo
4. Lägg till environment variable:
   - `NEXT_PUBLIC_MAPBOX_TOKEN` = din Mapbox-token
5. Klicka Deploy ✅

### Alternativ 2: Vercel CLI

```bash
npm i -g vercel
vercel
```

## Projektstruktur

```
src/
├── app/
│   ├── layout.tsx          # Root layout med i18n provider
│   ├── page.tsx            # Hemsida
│   └── globals.css         # Global CSS + Tailwind
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Navigation med språkväxlare
│   │   ├── Hero.tsx        # Hero-sektion
│   │   ├── TickerBar.tsx   # Live rutter-ticker
│   │   ├── HowItWorks.tsx  # Tre-stegs-förklaring
│   │   ├── WhySection.tsx  # Fördelar
│   │   ├── CtaBand.tsx     # Call-to-action
│   │   └── Footer.tsx      # Sidfot
│   ├── map/
│   │   └── MapSection.tsx  # Mapbox-karta med lastbilsmarkers
│   └── forms/
│       └── MatchForm.tsx   # Sök/matchningsformulär
├── lib/
│   ├── i18n.tsx            # Flerspråkig context
│   └── mockData.ts         # Mock-rutter (ersätts med API)
├── types/
│   └── index.ts            # TypeScript-typer
└── translations/
    ├── sv.json             # Svenska texter
    └── en.json             # Engelska texter
```

## Språk

Sajten stöder **svenska** (standard) och **engelska**.  
Växla med flaggknapparna uppe till höger i navigationen.

För att lägga till fler språk:
1. Skapa `src/translations/de.json` (t.ex. tyska)
2. Lägg till `'de'` i `Locale`-typen i `src/types/index.ts`
3. Importera och lägg till i `translations`-objektet i `src/lib/i18n.tsx`

## Nästa steg (roadmap)

### Fas 1 — MVP (nu)
- [x] Landningssida med kartvisning
- [x] Formulär för lastbil och frakt
- [x] Flerspråkig (SV/EN)
- [ ] Supabase-backend med riktiga rutter
- [ ] Auth (registrering/inloggning)

### Fas 2 — Plattform
- [ ] Dashboard för åkerier
- [ ] Dashboard för kunder
- [ ] Bokningssystem
- [ ] Stripe-betalningar

### Fas 3 — Smart matchning
- [ ] PostGIS-matchningsalgoritm
- [ ] GPS-tracking
- [ ] AI-prisoptimering
- [ ] Mobilapp

## Licens

Proprietär — FillMyTruck AB © 2025
