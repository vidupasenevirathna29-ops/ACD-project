import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import PropertyPage from "./pages/PropertyPage";
import { FavouritesProvider } from "./context/FavouritesContext";

export default function App() {
  return (
    <FavouritesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/property/:id" element={<PropertyPage />} />
        </Routes>
      </BrowserRouter>
    </FavouritesProvider>
  );
}
