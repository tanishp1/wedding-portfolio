"use client";

import { useState } from "react";
import { categories, gallery } from "../data/gallery";
import Image from "next/image";

export default function GalleryGrid({ limit }) {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered =
    active === "All" ? gallery : gallery.filter((g) => g.category === active);
  const items = limit ? filtered.slice(0, limit) : filtered;

  return (
    <>
      {!limit && (
        <div className="filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${active === cat ? "active" : ""}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      <div className="gallery-grid">
        {items.map((img) => (
          <div
            key={img.id}
            className="gallery-item"
            onClick={() => setSelected(img)}
          >
            <Image
              src={img.src}
              alt={img.title}
              width={800}
              height={1000}
              sizes="(max-width: 768px) 100vw, 33vw"
            />

            <div className="gallery-caption">
              <h4>{img.title}</h4>
              <span>{img.category}</span>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div className="lightbox" onClick={() => setSelected(null)}>
          <button className="lightbox-close" aria-label="Close">
            ✕
          </button>
          <Image
            src={selected.src}
            alt={selected.title}
            width={1000}
            height={1200}
            onClick={(e) => e.stopPropagation()}
          />
          <p>{selected.title}</p>
        </div>
      )}
    </>
  );
}
