"use client";

import { useState } from "react";

interface ProductGalleryProps {
  images: string[];
  name: string;
}

export function ProductGallery({ images, name }: ProductGalleryProps) {
  const [selected, setSelected] = useState(0);

  return (
    <div className="grid gap-4">
      <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
        <img
          src={images[selected]}
          alt={`${name} - Image ${selected + 1}`}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="grid grid-cols-3 gap-3">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className={`aspect-square rounded-xl overflow-hidden bg-muted border-2 transition-all ${
              selected === i
                ? "border-primary opacity-100"
                : "border-transparent opacity-60 hover:opacity-100"
            }`}
          >
            <img
              src={img}
              alt={`${name} thumbnail ${i + 1}`}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
