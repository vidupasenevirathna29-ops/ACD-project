import { useState } from "react";

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

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <h3>Search Filters</h3>

      <div>
        <label>
          Type:{" "}
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="any">Any</option>
            <option value="House">House</option>
            <option value="Flat">Flat</option>
          </select>
        </label>
      </div>

      <div>
        <label>
          Min Price:{" "}
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
        </label>

        <label style={{ marginLeft: "10px" }}>
          Max Price:{" "}
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </label>
      </div>

      <div>
        <label>
          Min Beds:{" "}
          <input
            type="number"
            value={minBeds}
            onChange={(e) => setMinBeds(e.target.value)}
          />
        </label>

        <label style={{ marginLeft: "10px" }}>
          Max Beds:{" "}
          <input
            type="number"
            value={maxBeds}
            onChange={(e) => setMaxBeds(e.target.value)}
          />
        </label>
      </div>

      <div>
        <label>
          Date added from:{" "}
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </label>

        <label style={{ marginLeft: "10px" }}>
          to:{" "}
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </label>
      </div>

      <div>
        <label>
          Postcode area:{" "}
          <input
            type="text"
            value={postcode}
            onChange={(e) => setPostcode(e.target.value)}
            placeholder="e.g. BR5, NW1"
          />
        </label>
      </div>

      <button type="submit" style={{ marginTop: "10px" }}>
        Search
      </button>
    </form>
  );
}

export default SearchForm;
