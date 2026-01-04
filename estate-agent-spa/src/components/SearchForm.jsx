import { useState } from "react";
import "./SearchForm.css";

function SearchForm({ onSearch }) {
  const [type, setType] = useState("any");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minBeds, setMinBeds] = useState("");
  const [maxBeds, setMaxBeds] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [postcode, setPostcode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({
      type,
      minPrice: minPrice ? Number(minPrice) : null,
      maxPrice: maxPrice ? Number(maxPrice) : null,
      minBeds: minBeds ? Number(minBeds) : null,
      maxBeds: maxBeds ? Number(maxBeds) : null,
      startDate: startDate || null,
      endDate: endDate || null,
      postcode: postcode.trim().toUpperCase() || null,
    });
  };

  const handleReset = () => {
    setType("any");
    setMinPrice("");
    setMaxPrice("");
    setMinBeds("");
    setMaxBeds("");
    setStartDate("");
    setEndDate("");
    setPostcode("");
    // trigger search with cleared filters
    onSearch({
      type: "any",
      minPrice: null,
      maxPrice: null,
      minBeds: null,
      maxBeds: null,
      startDate: null,
      endDate: null,
      postcode: null,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <h3>Search Filters</h3>

      <div className="form-group">
        <label>
          Type:
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="any">Any</option>
            <option value="House">House</option>
            <option value="Flat">Flat</option>
          </select>
        </label>
      </div>

      <div className="form-group">
        <div className="form-row">
          <label>
            Min Price:
            <input
              type="number"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
          </label>

          <label>
            Max Price:
            <input
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </label>
        </div>
      </div>

      <div className="form-group">
        <div className="form-row">
          <label>
            Min Beds:
            <input
              type="number"
              value={minBeds}
              onChange={(e) => setMinBeds(e.target.value)}
            />
          </label>

          <label>
            Max Beds:
            <input
              type="number"
              value={maxBeds}
              onChange={(e) => setMaxBeds(e.target.value)}
            />
          </label>
        </div>
      </div>

      <div className="form-group">
        <div className="form-row">
          <label>
            Date added from:
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </label>

          <label>
            to:
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </label>
        </div>
      </div>

      <div className="form-group">
        <label>
          Postcode area:
          <input
            type="text"
            value={postcode}
            onChange={(e) => setPostcode(e.target.value)}
            placeholder="e.g. BR5, NW1"
          />
        </label>
      </div>

      <div style={{ display: "flex", gap: "10px" }}>
        <button type="submit" className="search-button">
          Search
        </button>
        <button type="button" className="search-button" onClick={handleReset}>
          Reset
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
