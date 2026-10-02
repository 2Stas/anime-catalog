import React, { useState, useEffect } from 'react';
import { fetchAnimeList } from '../Api/kitsuApi';
import { AnimeFilters } from '../components/AnimeFilters';
import AnimeList from '../components/AnimeList';
import Loading from '../components/Loading';
import '../style/AnimeListPage.css';

const PAGE_LIMIT = 20;

const initialFilters = {
  subtype: '',
  status: '',
  sort: '',
};

export const AnimeListPage = () => {
  const [animeList, setAnimeList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState(initialFilters);
  const [pageOffset, setPageOffset] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    const loadAnime = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetchAnimeList({
          pageLimit: PAGE_LIMIT,
          pageOffset,
          subtype: filters.subtype,
          status: filters.status,
          sort: filters.sort,
        });

        setAnimeList(response.data || []);
        if (response.meta) {
          setTotalCount(response.meta.count);
        }
      } catch (err) {
        setError('Failed to load anime list.');
      } finally {
        setLoading(false);
      }
    };

    loadAnime();
  }, [pageOffset, filters]);

  const handleFilterChange = (name, value) => {
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
    setPageOffset(0); 
  };

  const handleResetFilters = () => {
    setFilters(initialFilters);
    setPageOffset(0);
  };

  const handleNextPage = () => {
    if (pageOffset + PAGE_LIMIT < totalCount) {
      setPageOffset((prev) => prev + PAGE_LIMIT);
    }
  };

  const handlePrevPage = () => {
    if (pageOffset > 0) {
      setPageOffset((prev) => Math.max(0, prev - PAGE_LIMIT));
    }
  };

  return (
    <div className="anime-list-page">
      <h1>Anime Catalog</h1>

      <AnimeFilters
        filters={filters}
        onFilterChange={handleFilterChange}
        onReset={handleResetFilters}
      />

      {loading && <Loading />}
      {error && <p className="error-message">{error}</p>}

      {!loading && !error && (
        <>
          <AnimeList animeList={animeList} />

          {/* Пагінація */}
          <div className="pagination">
            <button
              onClick={handlePrevPage}
              disabled={pageOffset === 0}
            >
              Previous
            </button>
            <span>
              Page {Math.floor(pageOffset / PAGE_LIMIT) + 1}
            </span>
            <button
              onClick={handleNextPage}
              disabled={pageOffset + PAGE_LIMIT >= totalCount}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};