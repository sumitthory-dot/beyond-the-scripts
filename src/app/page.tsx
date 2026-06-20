import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HomeSections } from "@/components/HomeSections";
import { Navbar } from "@/components/Navbar";
import { Newsletter } from "@/components/Newsletter";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip bg-white text-slate-950">
      <Navbar />
      <Hero />
      <HomeSections />
      <Newsletter />
      <Footer />
    </main>
  );
}
