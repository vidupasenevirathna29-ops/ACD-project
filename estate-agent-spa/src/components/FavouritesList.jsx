import { useFavourites } from "../context/FavouritesContext";

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
        style={{ marginBottom: "10px" }}
      >
        Clear All
      </button>

      <ul>
        {favourites.map((p) => (
          <li key={p.id}>
            {p.type} – £{p.price.toLocaleString()}
            <button
              style={{ marginLeft: "6px" }}
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
