import { Search } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const categories = [
  'Wedding',
  'Catering',
  'Photography',
  'Music & DJs',
  'Decor',
  'Venues',
  'Traditional',
];

export default function Hero() {
  return (
    <section className="relative">
      {/* Spline full-width cover background */}
      <div className="relative h-[520px] md:h-[620px] w-full">
        <Spline
          scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Palette-aligned scrims to keep contrast and elegance over a dark Spline scene */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/30 via-[#FAF9F0]/60 to-[#FAF9F0]" />
        {/* Subtle radial gold accents for premium feel */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(600px 180px at 80% 10%, rgba(209,178,128,0.28), rgba(209,178,128,0) 60%), radial-gradient(420px 140px at 10% 30%, rgba(209,178,128,0.22), rgba(209,178,128,0) 60%)',
          }}
        />
      </div>

      {/* Hero content card overlapping the cover */}
      <div className="mx-auto max-w-6xl px-4 -mt-24 md:-mt-28 pb-8">
        <div className="rounded-2xl md:rounded-3xl p-6 md:p-10 bg-gradient-to-b from-[#FAF9F0] to-white border border-[#E5E5E5] shadow-sm">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E5E5E5] bg-white/80 px-3 py-1 text-xs text-[#6C6C6C]">
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: '#D1B280' }} />
            Premium event marketplace — Jaffna
          </div>

          <h1
            className="text-[#2F2F2F] mt-3 text-3xl md:text-5xl leading-tight tracking-tight"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Celebrate with Sri Lankan elegance
          </h1>
          <p className="text-[#6C6C6C] mt-3 md:mt-4 max-w-2xl">
            Find trusted vendors, venues, and artisans across Jaffna. Curated services for weddings, kovil ceremonies, and island-inspired gatherings.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6C6C6C]" size={18} />
              <input
                type="text"
                placeholder="Search vendors, services, or venues"
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-[#E5E5E5] bg-white text-[#2F2F2F] placeholder-[#6C6C6C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D1B280]"
              />
            </div>
            <button
              className="px-5 py-3 rounded-xl text-[#2F2F2F] shadow-sm bg-gradient-to-b from-[#E7D7B3] to-[#D1B280] hover:from-[#D1B280] hover:to-[#B89554] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D1B280]"
            >
              Find Vendors
            </button>
          </div>

          <div className="mt-6 flex gap-2 flex-wrap">
            {categories.map((c) => (
              <button
                key={c}
                className="px-4 py-2 rounded-full border border-[#E5E5E5] bg-white text-sm text-[#2F2F2F] hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D1B280]"
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
