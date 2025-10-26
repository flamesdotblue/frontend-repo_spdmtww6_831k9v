import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '#' },
  { label: 'Vendors', href: '#' },
  { label: 'Quotes', href: '#' },
  { label: 'About', href: '#' },
  { label: 'Contact', href: '#' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/80 bg-white border-b border-[#E5E5E5]">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-b from-[#E7D7B3] to-[#D1B280] shadow" aria-hidden />
          <span className="text-[#2F2F2F] text-xl font-semibold tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>Festivaz</span>
        </div>

        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-[#2F2F2F] hover:bg-black/5 px-3 py-2 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D1B280]"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#"
            className="text-sm px-4 py-2 rounded-xl border border-[#E5E5E5] bg-white hover:bg-black/5 text-[#2F2F2F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D1B280]"
          >
            Sign in
          </a>
          <a
            href="#"
            className="text-sm px-4 py-2 rounded-xl text-[#2F2F2F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D1B280] shadow-sm bg-gradient-to-b from-[#E7D7B3] to-[#D1B280] hover:from-[#D1B280] hover:to-[#B89554]"
          >
            Join as Vendor
          </a>
        </div>

        <button
          aria-label="Open menu"
          className="md:hidden p-2 rounded-xl hover:bg-black/5 text-[#2F2F2F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D1B280]"
          onClick={() => setOpen(true)}
        >
          <Menu size={22} />
        </button>
      </nav>

      {/* Mobile slide-down menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden border-t border-[#E5E5E5] bg-white ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-b from-[#E7D7B3] to-[#D1B280] shadow" aria-hidden />
            <span className="text-[#2F2F2F] text-lg" style={{ fontFamily: 'Playfair Display, serif' }}>Festivaz</span>
          </div>
          <button
            aria-label="Close menu"
            className="p-2 rounded-xl hover:bg-black/5 text-[#2F2F2F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D1B280]"
            onClick={() => setOpen(false)}
          >
            <X size={22} />
          </button>
        </div>
        <div className="px-4 pb-4 space-y-1">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="block px-3 py-3 rounded-xl text-[#2F2F2F] hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D1B280]"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <div className="flex gap-2 pt-2">
            <a
              href="#"
              className="flex-1 text-center px-4 py-3 rounded-xl border border-[#E5E5E5] bg-white hover:bg-black/5 text-[#2F2F2F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D1B280]"
              onClick={() => setOpen(false)}
            >
              Sign in
            </a>
            <a
              href="#"
              className="flex-1 text-center px-4 py-3 rounded-xl text-[#2F2F2F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D1B280] shadow-sm bg-gradient-to-b from-[#E7D7B3] to-[#D1B280] hover:from-[#D1B280] hover:to-[#B89554]"
              onClick={() => setOpen(false)}
            >
              Join as Vendor
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
