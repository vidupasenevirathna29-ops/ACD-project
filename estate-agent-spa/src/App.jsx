import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from "./pages/searchPage.jsx";
import PropertyPage from "./pages/PropertyPage.jsx";
import { FavouritesProvider } from "./context/FavouritesContext.jsx";

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
