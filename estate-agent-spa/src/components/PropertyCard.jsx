import { Link } from "react-router-dom";
import { useFavourites } from "../context/FavouritesContext";

function PropertyCard({ property }) {
  const { addFavourite } = useFavourites();

  const handleDragStart = (e) => {
    // send the property id with the drag event
    e.dataTransfer.setData("text/plain", property.id);
  };

  return (
    <article
      className="property-card"
      draggable
      onDragStart={handleDragStart}
    >
      <img src={property.picture} alt={property.location} width="220" />

      <h3>
        {property.type} – £{property.price.toLocaleString()}
      </h3>
      <p>{property.bedrooms} bedrooms</p>
      <p>{property.location}</p>

      <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
        <button onClick={() => addFavourite(property)}>❤️ Favourite</button>
        <Link to={`/property/${property.id}`}>
          <button>View Details</button>
        </Link>
      </div>
    </article>
  );
}

export default PropertyCard;
