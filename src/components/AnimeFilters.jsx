import React from 'react';
import '../style/AnimeFilters.css';

export const AnimeFilters = ({ filters, onFilterChange, onReset }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onFilterChange(name, value);
  };

  return (
    <div className="anime-filters-container">
      {/* Фільтр за типом */}
      <div className="filter-group">
        <label htmlFor="subtype">Type:</label>
        <select
          id="subtype"
          name="subtype"
          value={filters.subtype}
          onChange={handleChange}
        >
          <option value="">All Types</option>
          <option value="TV">TV Show</option>
          <option value="movie">Movie</option>
          <option value="OVA">OVA</option>
          <option value="ONA">ONA</option>
          <option value="special">Special</option>
          <option value="music">Music</option>
        </select>
      </div>

      {/* Фільтр за статусом */}
      <div className="filter-group">
        <label htmlFor="status">Status:</label>
        <select
          id="status"
          name="status"
          value={filters.status}
          onChange={handleChange}
        >
          <option value="">All Statuses</option>
          <option value="current">Currently Airing</option>
          <option value="finished">Finished</option>
          <option value="tba">TBA (To Be Announced)</option>
          <option value="unreleased">Unreleased</option>
          <option value="upcoming">Upcoming</option>
        </select>
      </div>

      {/* Сортування за рейтингом та назвою */}
      <div className="filter-group">
        <label htmlFor="sort">Sort By:</label>
        <select
          id="sort"
          name="sort"
          value={filters.sort}
          onChange={handleChange}
        >
          <option value="">Default</option>
          <option value="-averageRating">Rating (High to Low)</option>
          <option value="averageRating">Rating (Low to High)</option>
          <option value="canonicalTitle">Title (A-Z)</option>
          <option value="-canonicalTitle">Title (Z-A)</option>
        </select>
      </div>

      {/* Кнопка скидання фільтрів */}
      <button className="reset-button" onClick={onReset} type="button">
        Reset Filters
      </button>
    </div>
  );
};