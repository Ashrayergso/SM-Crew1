import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NextAvailabilityTable from './NextAvailabilityTable';
import FilterForm from './FilterForm';

const NextAvailabilityPage = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filters, setFilters] = useState({});

    const fetchData = async () => {
        try {
            const response = await axios.get('/api/next-availability', { params: filters });
            setData(response.data);
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };

    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
    };

    useEffect(() => {
        fetchData();
    }, [filters]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Next Availability</h1>
            <FilterForm onChange={handleFilterChange} />
            <NextAvailabilityTable data={data} />
        </div>
    );
};

export default NextAvailabilityPage;