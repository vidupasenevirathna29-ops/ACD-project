import { createContext, useContext, useState } from "react";

const FavouritesContext = createContext();

export function FavouritesProvider({ children }) {
  const [favourites, setFavourites] = useState([]);

  const addFavourite = (property) => {
    setFavourites((prev) => {
      const exists = prev.some((p) => p.id === property.id);
      if (exists) return prev; // prevent duplicates
      return [...prev, property];
    });
  };

  const removeFavourite = (id) => {
    setFavourites((prev) => prev.filter((p) => p.id !== id));
  };

  const clearFavourites = () => setFavourites([]);

  return (
    <FavouritesContext.Provider
      value={{ favourites, addFavourite, removeFavourite, clearFavourites }}
    >
      {children}
    </FavouritesContext.Provider>
  );
}

export function useFavourites() {
  return useContext(FavouritesContext);
}
