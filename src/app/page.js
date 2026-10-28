import Link from "next/link";
import GalleryGrid from "./components/GalleryGrid";
import Hero from "./components/Hero";
import PackageCard from "./components/PackageCard";
import { packages } from "./data/package";
import Testimonial from "./components/Testimonial";
import { testimonials } from "./data/testimonial";

export default function Home(){
  return (
    <>
    <Hero/>

    <section className="section">
      <div className="container">
        <h2 className="section-title">Featured a work</h2>
        <p className="section-sub">A glimpse of the love stories we've told.</p>
        <GalleryGrid limit= {6}/>
        <div className="center">
          <Link href={"/gallery"} className="btn btn-outline-dark">
          See Full Gallery
          </Link>
        </div>
      </div>
    </section>

    <section className="section alt">
        <div className="container">
          <h2 className="section-title">Our Packages</h2>
          <p className="section-sub">Simple, transparent pricing for every celebration.</p>
          <div className="package-grid">
            {packages.map((p) => (
              <PackageCard key={p.id} pkg={p} />
            ))}
          </div>
        </div>
      </section>

       <section className="section">
        <div className="container">
          <h2 className="section-title">Happy Couples</h2>
          <div className="testimonial-grid">
            {testimonials.slice(0, 2).map((t) => (
              <Testimonial key={t.id} t={t} />
            ))}
          </div>
          <div className="center">
            <Link href="/testimonials" className="btn btn-outline-dark">
              Read More Reviews
            </Link>
          </div>
        </div>
      </section>

       <section className="cta">
        <div className="container center">
          <h2>Ready to plan your big day?</h2>
          <p>Dates fill up fast. Let's talk about your story.</p>
          <Link href="/contact" className="btn btn-primary">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  )
}