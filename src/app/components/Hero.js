import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-slide" />
      <div className="hero-slide" />
      <div className="hero-slide" />
      <div className="hero-slide" />
      <div className="hero-overlay" />
      <div className="container hero-content">
          <p className="eyebrow">Wedding Photographer & Planner</p>
          <h1>Capturing Love, One Frame at a Time</h1>
          <p className="hero-sub">
            From planning every detail to preserving every smile, we make your
            big day timeless.
          </p>
          <div>
            <Link href={"/gallery"} className="btn btn-primary">
            View Gallery
            </Link>
            <Link href="/contact" className="btn btn-outline">
            Book a Date
          </Link>
          </div>
        </div>
    </section>
  );
}
