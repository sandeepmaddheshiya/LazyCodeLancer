"use client"
import { About } from './components/about';
import { Footer } from './components/footer';
import { Hero } from './components/hero';
import { NavbarDemo } from './components/navbar';
import { NewsLetter } from './components/news-letter';
import { Testimonial } from './components/testimonial';

export default function Home() {

  return (
   <div>
   <NavbarDemo/>
   <Hero/>
   <About/>
   <Testimonial/>
   <NewsLetter/>
   <Footer/>
   </div>
  );
}
