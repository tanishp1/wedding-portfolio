import ContactForm from "../components/ContactForm";

export const metadata = { title: "Contact | EternalMoments" };

export default function ContactPage() {
  return (
    <>
      <section className="page-header">
        <h1>Let's Talk</h1>
        <p>Tell us your wedding date and we'll check availability.</p>
      </section>
      <section className="section">
        <div className="container contact-layout">
          <div className="contact-info">
            <h3>Get in touch</h3>
            <p>📧 hello@eternalmoments.com</p>
            <p>📞 +91 98765 43210</p>
            <p>📍 Pune, Maharashtra</p>
            <p>🕒 Mon–Sat, 10am – 7pm</p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}