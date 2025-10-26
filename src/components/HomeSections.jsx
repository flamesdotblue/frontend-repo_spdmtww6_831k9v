import { Star, Shield, CheckCircle } from 'lucide-react';

const popularCategories = [
  {
    title: 'Wedding Planners',
    img: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Caterers (Jaffna Cuisine)',
    img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
  },
  { title: 'Photography', img: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Traditional Decor', img: 'https://images.unsplash.com/photo-1593113598332-cc9b0f38042c?q=80&w=1200&auto=format&fit=crop' },
];

const vendors = [
  {
    name: 'Yaal Weddings',
    category: 'Full Planning',
    rating: 4.9,
    img: 'https://images.unsplash.com/photo-1545153996-0b58c0b1931f?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Karaiyal Caterers',
    category: 'Catering',
    rating: 4.8,
    img: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Jaffna Lens',
    category: 'Photography',
    rating: 4.7,
    img: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Kovil Decor Co.',
    category: 'Decor',
    rating: 4.6,
    img: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function HomeSections() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-24">
      {/* Popular Categories */}
      <section className="mt-4">
        <h2 className="text-[#2F2F2F] text-2xl md:text-3xl mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Popular categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
          {popularCategories.map((item) => (
            <a key={item.title} href="#" className="group block overflow-hidden rounded-2xl border border-[#E5E5E5] bg-white shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D1B280]">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={item.img} alt="" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="p-3 md:p-4">
                <p className="text-sm md:text-base text-[#2F2F2F]">{item.title}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Featured Vendors slider */}
      <section className="mt-10">
        <h2 className="text-[#2F2F2F] text-2xl md:text-3xl mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Featured vendors</h2>
        <div className="overflow-x-auto [-ms-overflow-style:'none'] [scrollbar-width:'none'] [&::-webkit-scrollbar]:hidden">
          <div className="flex gap-4 md:gap-6 pr-4 snap-x snap-mandatory">
            {vendors.map((v) => (
              <a key={v.name} href="#" className="min-w-[75%] sm:min-w-[45%] md:min-w-[28%] snap-start rounded-2xl border border-[#E5E5E5] bg-white shadow-sm overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D1B280]">
                <div className="aspect-[4/3]">
                  <img src={v.img} alt="" className="h-full w-full object-cover" />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-[#2F2F2F] font-medium">{v.name}</h3>
                    <div className="flex items-center gap-1 text-[#2F2F2F]">
                      <Star size={16} className="fill-[#D1B280] text-[#D1B280]" />
                      <span className="text-sm">{v.rating}</span>
                    </div>
                  </div>
                  <p className="text-sm text-[#6C6C6C]">{v.category}</p>
                  <button className="mt-3 w-full text-sm px-4 py-2 rounded-xl text-[#2F2F2F] shadow-sm bg-gradient-to-b from-[#E7D7B3] to-[#D1B280] hover:from-[#D1B280] hover:to-[#B89554] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D1B280]">
                    View profile
                  </button>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Trust banner */}
      <section className="mt-12">
        <div className="rounded-2xl md:rounded-3xl border border-[#E5E5E5] bg-gradient-to-b from-[#FAF9F0] to-white p-5 md:p-7 flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-3">
            <Shield className="text-[#2F2F2F]" />
            <div>
              <p className="text-[#2F2F2F] font-medium">Verified vendors</p>
              <p className="text-[#6C6C6C] text-sm">Profiles screened for quality & reliability</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle className="text-[#2F2F2F]" />
            <div>
              <p className="text-[#2F2F2F] font-medium">Secure requests</p>
              <p className="text-[#6C6C6C] text-sm">Direct quotes, clear timelines, local support</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Star className="text-[#2F2F2F]" />
            <div>
              <p className="text-[#2F2F2F] font-medium">Community rated</p>
              <p className="text-[#6C6C6C] text-sm">Reviews from real events across the North</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
