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
      <div className="relative h-[460px] md:h-[520px] w-full">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Soft ivory/white scrim to keep palette consistent and ensure text contrast */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/85 via-[#FAF9F0]/92 to-[#FAF9F0]" />
      </div>

      {/* Hero content card overlapping the cover */}
      <div className="mx-auto max-w-6xl px-4 -mt-20 md:-mt-24 pb-6">
        <div className="rounded-2xl md:rounded-3xl p-6 md:p-10 bg-gradient-to-b from-[#FAF9F0] to-white border border-[#E5E5E5] shadow-sm">
          <h1 className="text-[#2F2F2F] text-3xl md:text-5xl leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
            Plan Sri Lankan events with elegance
          </h1>
          <p className="text-[#6C6C6C] mt-3 md:mt-4 max-w-2xl">
            Discover trusted vendors across Jaffna — from kovil ceremonies to beachfront weddings, create moments with island warmth.
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
