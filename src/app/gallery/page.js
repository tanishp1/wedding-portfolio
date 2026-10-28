import GalleryGrid from "../components/GalleryGrid";

export const metadata = { title: "Gallery | EternalMoments" };

export default function GalleryPage() {
  return (
    <>
      <section className="page-header">
        <h1>Gallery</h1>
        <p>Moments we've had the honor to capture.</p>
      </section>
      <section className="section">
        <div className="container">
          <GalleryGrid />
        </div>
      </section>

    </>
  );
}