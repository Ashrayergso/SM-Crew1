import React, { useEffect, useState } from 'react';
import axios from '../services/api';
import '../styles/ShipsWithNoFutureAssignment.css';

const ShipsTable = () => {
    const [ships, setShips] = useState([]);

    useEffect(() => {
        const fetchShips = async () => {
            try {
                const response = await axios.get('/ships_with_no_future_assignment');
                setShips(response.data);
            } catch (error) {
                console.error('Error fetching data from API', error);
            }
        };
        fetchShips();
    }, []);

    return (
        <div className="ships-table">
            <h2>Ships With No Future Assignment</h2>
            <table>
                <thead>
                    <tr>
                        <th>Ship ID</th>
                        <th>Ship Name</th>
                        <th>Ship Type</th>
                    </tr>
                </thead>
                <tbody>
                    {ships.map((ship) => (
                        <tr key={ship.id}>
                            <td>{ship.id}</td>
                            <td>{ship.name}</td>
                            <td>{ship.type}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ShipsTable;