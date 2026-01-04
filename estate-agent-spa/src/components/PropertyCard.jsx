import { Link } from "react-router-dom";
import { useFavourites } from "../context/FavouritesContext";
import "./PropertyCard.css";

function PropertyCard({ property }) {
  const { addFavourite } = useFavourites();

  const handleDragStart = (e) => {
    // send the property id with the drag event
    e.dataTransfer.setData("text/plain", property.id);
  };

  // Resolve images placed in `src/assets/` at runtime using Vite's import.meta.url
  let imgSrc = property.picture;
  try {
    // property.picture in the JSON is e.g. "images/prop1pic1small.jpg"
    imgSrc = new URL(`../assets/${property.picture}`, import.meta.url).href;
  } catch (err) {
    // fallback: leave as-is (could be an absolute URL or already correct)
  }

  return (
    <article className="property-card" draggable onDragStart={handleDragStart}>
      <img src={imgSrc} alt={property.location} />

      <h3>
        {property.type} – £{property.price.toLocaleString()}
      </h3>
      <p>{property.bedrooms} bedrooms</p>
      <p>{property.location}</p>

      <div>
        <button onClick={() => addFavourite(property)}>❤️ Favourite</button>
        <Link to={`/property/${property.id}`}>
          <button>View Details</button>
        </Link>
      </div>
    </article>
  );
}

export default PropertyCard;
