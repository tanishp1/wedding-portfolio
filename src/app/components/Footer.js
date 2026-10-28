import Link from "next/link";

export default function Footer() {

    const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <h3 className="logo">
            Eternal <span> Moments</span>
          </h3>
          <p>Wedding photography & planning that tells your story.</p>
        </div>
        <div>
          <h4>Quick link</h4>
          <Link href={"/gallery"}>Gallery</Link>
          <Link href="/packages">Packages</Link>
          <Link href="/testimonial">Testimonials</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div>
          <h4>Contact</h4>
          <p>hello@eternalmoments.com</p>
          <p>+91 98765 43210</p>
          <p>Pune, Maharashtra</p>
        </div>
      </div>
      <p className="copyright">
        © {year} EternalMoments. All rights reserved.
      </p>
    </footer>
  );
}
