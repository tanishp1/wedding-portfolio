import Testimonial from "../components/Testimonial";
import { testimonials } from "../data/testimonial";

export default function TestimonialsPage() {
  return (
    <>
      <section className="page-header">
        <h1>Testimonials</h1>
        <p>Kind words from the couples we've worked with.</p>
      </section>
      <section className="section">
        <div className="container">
          <div className="testimonial-grid">
            {testimonials.map((t) => (
              <Testimonial key={t.id} t={t} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}