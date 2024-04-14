import Footer from "@/components/common/Footer";

import { WavyBackgroundHero } from "@/components/homepage/Hero";

export default function Home() {
  return (
    <>
      <main className="">
        <div className="w-full subpixel-antialiased">
          <WavyBackgroundHero />

          <Footer />
        </div>
      </main>
    </>
  );
}
