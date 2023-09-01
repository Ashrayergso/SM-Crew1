import React, { useEffect, useState } from 'react';
import axios from '../services/api';
import FilterForm from './FilterForm';

const NextAvailabilityTable = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('/next-availability');
            setData(result.data);
        };
        fetchData();
    }, []);

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    const filteredData = data.filter(item =>
        item.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div>
            <FilterForm handleFilterChange={handleFilterChange} />
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Next Availability</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(item => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.role}</td>
                            <td>{item.next_availability}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default NextAvailabilityTable;