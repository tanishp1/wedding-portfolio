import PackageCard from "../components/PackageCard";
import { packages } from "../data/package";

export const metadata = { title: "Packages | EternalMoments" };

export default function PackagesPage() {
  return (
    <>
      <section className="page-header">
        <h1>Packages</h1>
        <p>Choose the plan that fits your celebration. Custom quotes available.</p>
      </section>
      <section className="section">
        <div className="container">
          <div className="package-grid">
            {packages.map((p) => (
              <PackageCard key={p.id} pkg={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}