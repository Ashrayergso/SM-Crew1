import React, { useEffect, useState } from 'react';
import MainMatchingTable from './MainMatchingTable';
import FilterForm from './FilterForm';
import { getMainMatching } from '../services/api';
import '../styles/MainMatching.css';

const MainMatchingPage = () => {
  const [mainMatchingData, setMainMatchingData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    fetchMainMatching();
  }, [filters]);

  const fetchMainMatching = async () => {
    setLoading(true);
    const data = await getMainMatching(filters);
    setMainMatchingData(data);
    setLoading(false);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="main-matching-page">
      <h1>Main Matching</h1>
      <FilterForm onChange={handleFilterChange} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <MainMatchingTable data={mainMatchingData} />
      )}
    </div>
  );
};

export default MainMatchingPage;