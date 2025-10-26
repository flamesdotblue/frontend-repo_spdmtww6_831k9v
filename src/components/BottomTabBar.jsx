import { Home, Search, FileText, MessageSquare, User } from 'lucide-react';

const tabs = [
  { label: 'Home', icon: Home },
  { label: 'Search', icon: Search },
  { label: 'Quotes', icon: FileText },
  { label: 'Messages', icon: MessageSquare },
  { label: 'Profile', icon: User },
];

export default function BottomTabBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 md:hidden">
      <div className="mx-auto max-w-6xl px-4 pb-3">
        <div className="rounded-2xl border border-[#E5E5E5] bg-white/90 backdrop-blur shadow-sm">
          <div className="grid grid-cols-5 py-2">
            {tabs.map((t, idx) => (
              <button
                key={t.label}
                className={`flex flex-col items-center gap-1 py-2 text-xs text-[#2F2F2F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D1B280] rounded-xl mx-1 ${
                  idx === 0 ? 'ring-2 ring-[#D1B280]' : ''
                }`}
                aria-label={t.label}
              >
                <t.icon size={18} />
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
