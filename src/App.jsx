import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeSections from './components/HomeSections';
import BottomTabBar from './components/BottomTabBar';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF9F0] text-[#2F2F2F]">
      {/* Load fonts (Playfair Display for headings, Inter for body) */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@500;600;700&display=swap'); body { font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, 'Apple Color Emoji','Segoe UI Emoji'; } h1,h2,h3,h4 { font-family: 'Playfair Display', serif; }`}</style>

      {/* Subtle ivory to white background gradient */}
      <div className="absolute inset-0 -z-10" aria-hidden>
        <div className="h-full w-full bg-gradient-to-b from-[#FAF9F0] to-white" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <HomeSections />
      </main>
      <BottomTabBar />
    </div>
  );
}
