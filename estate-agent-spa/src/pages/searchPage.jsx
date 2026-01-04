import { useState, useEffect } from "react";
import data from "../data/properties.json";
import PropertyCard from "../components/PropertyCard";
import FavouritesList from "../components/FavouritesList";
import SearchForm from "../components/SearchForm";

const monthMap = {
  January: 0,
  February: 1,
  March: 2,
  April: 3,
  May: 4,
  June: 5,
  July: 6,
  August: 7,
  September: 8,
  October: 9,
  November: 10,
  December: 11,
};

function convertToDate(p) {
  return new Date(p.added.year, monthMap[p.added.month], p.added.day);
}

function SearchPage() {
  const [properties, setProperties] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [lastFilters, setLastFilters] = useState(null);
  const [lastCount, setLastCount] = useState(0);

  useEffect(() => {
    setProperties(data.properties);
    setFiltered(data.properties);
  }, []);

  const handleSearch = (filters) => {
    console.log("Search filters:", filters);
    const {
      type,
      minPrice,
      maxPrice,
      minBeds,
      maxBeds,
      startDate,
      endDate,
      postcode
    } = filters;

    let result = [...properties];

    if (type !== "any") {
      result = result.filter((p) => p.type === type);
    }

    if (minPrice !== null) result = result.filter((p) => p.price >= minPrice);
    if (maxPrice !== null) result = result.filter((p) => p.price <= maxPrice);

    if (minBeds !== null) result = result.filter((p) => p.bedrooms >= minBeds);
    if (maxBeds !== null) result = result.filter((p) => p.bedrooms <= maxBeds);

    if (startDate || endDate) {
      const start = startDate ? new Date(startDate) : null;
      const end = endDate ? new Date(endDate) : null;

      result = result.filter((p) => {
        const d = convertToDate(p);
        if (start && d < start) return false;
        if (end && d > end) return false;
        return true;
      });
    }

    if (postcode) {
      result = result.filter((p) =>
        p.location.toUpperCase().includes(postcode)
      );
    }

    console.log("Filtered result count:", result.length, result.map((p) => p.id));
    setFiltered(result);
    setLastFilters(filters);
    setLastCount(result.length);
  };

  return (
    <div className="search-container">
      <div className="search-main">
        <h1>Property Search</h1>

        <SearchForm onSearch={handleSearch} />

        {lastFilters && (
          <div style={{ marginTop: 12, color: "#ccc", fontSize: "0.95em" }}>
            <strong>Last search:</strong>&nbsp;{JSON.stringify(lastFilters)} — <strong>Results:</strong>&nbsp;{lastCount}
          </div>
        )}

        <div className="results-grid">
          {filtered.length === 0 && (
            <p><strong>No matching properties</strong></p>
          )}

          {filtered.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>
      </div>

      <div className="search-sidebar">
  <FavouritesList allProperties={properties} />
</div>

    </div>
  );
}

export default SearchPage;
