import { useFavourites } from "../context/FavouritesContext";
import "./FavouritesList.css";

function FavouritesList({ allProperties }) {
  const { favourites, addFavourite, removeFavourite, clearFavourites } =
    useFavourites();

  const handleDragOver = (e) => {
    // allow drop
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("text/plain");
    const property = allProperties.find((p) => p.id === id);
    if (property) {
      addFavourite(property);
    }
  };

  return (
    <aside
      className="favourites"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <h2>Favourites ({favourites.length})</h2>

      <button
        onClick={clearFavourites}
        disabled={favourites.length === 0}
      >
        Clear All
      </button>

      <ul>
        {favourites.map((p) => (
          <li key={p.id}>
            <span>{p.type} – £{p.price.toLocaleString()}</span>
            <button
              onClick={() => removeFavourite(p.id)}
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default FavouritesList;
