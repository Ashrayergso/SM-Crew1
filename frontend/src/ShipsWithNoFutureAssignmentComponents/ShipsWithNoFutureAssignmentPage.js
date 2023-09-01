import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ShipsTable from './ShipsTable';
import FilterForm from './FilterForm';

const ShipsWithNoFutureAssignmentPage = () => {
  const [ships, setShips] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchShips = async () => {
      setLoading(true);
      try {
        const response = await axios.get('/api/ships-with-no-future-assignment');
        setShips(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchShips();
  }, []);

  return (
    <div>
      <h1>Ships With No Future Assignment</h1>
      <FilterForm />
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <ShipsTable ships={ships} />
      )}
    </div>
  );
};

export default ShipsWithNoFutureAssignmentPage;