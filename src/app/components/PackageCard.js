import Link from "next/link";

export default function PackageCard({ pkg }) {
  return (
    <div className={`package-card ${pkg.featured ? "featured" : ""}`}>
      {pkg.featured && <span className="badge">Most Popular</span>}
      <h3>{pkg.name}</h3>
      <p className="tagline">{pkg.tagline}</p>
      <p className="price">{pkg.price}</p>
      <ul>
        {pkg.features.map((f) => (
          <li key={f}>✓ {f}</li>
        ))}
      </ul>
      <Link href="/contact" className="btn btn-primary">
        Choose {pkg.name}
      </Link>
    </div>
  );
}