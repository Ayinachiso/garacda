import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import News from '@/components/News';
import Guidelines from '@/components/Guidelines';
import Benefits from '@/components/Benefits';
import Footer from '@/components/Footer';
import './globals.css';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <main>
        <About />
        <News />
        <Guidelines />
        <Benefits />
      </main>
      <Footer />
    </>
  );
}
