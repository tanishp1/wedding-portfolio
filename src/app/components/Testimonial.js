export default function Testimonial({ t }) {
  return (
    <div className="testimonial-card">
      <div className="stars">
        {"★".repeat(t.rating)}
        {"☆".repeat(5 - t.rating)}
      </div>
      <p className="quote">“{t.text}”</p>
      <p className="author">
        {t.name} <span>· {t.place}</span>
      </p>
    </div>
  );
}