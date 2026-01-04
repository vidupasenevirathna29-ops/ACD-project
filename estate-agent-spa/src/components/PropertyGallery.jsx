import { useState } from "react";

function PropertyGallery({ property }) {
  const images =
    property.images && property.images.length > 0
      ? property.images
      : [property.picture];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="property-gallery">
      <div className="gallery-main">
        <img
          src={images[activeIndex]}
          alt={property.location}
          style={{ width: "100%", borderRadius: "8px" }}
        />
      </div>

      <div className="gallery-thumbs" style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`${property.location} ${index + 1}`}
            width="80"
            height="60"
            style={{
              borderRadius: "4px",
              cursor: "pointer",
              border: index === activeIndex ? "2px solid blue" : "2px solid #ddd",
              objectFit: "cover",
            }}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default PropertyGallery;
