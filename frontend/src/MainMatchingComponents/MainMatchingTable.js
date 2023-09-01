import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import './MainMatching.css';

const MainMatchingTable = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                '/api/main-matching',
            );
            setData(result.data);
        };
        fetchData();
    }, []);

    return (
        <div className="MainMatchingTable">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Staff Name</th>
                        <th>Role</th>
                        <th>Ship Name</th>
                        <th>Next Availability</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item.id}>
                            <td>{item.staff_name}</td>
                            <td>{item.role}</td>
                            <td>{item.ship_name}</td>
                            <td>{item.next_availability}</td>
                            <td>{item.score}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default MainMatchingTable;