import React, { useState } from 'react';

const FilterForm = ({ onFilter }) => {
  const [staffName, setStaffName] = useState('');
  const [shipName, setShipName] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onFilter({ staffName, shipName, role });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Staff Name:
        <input
          type="text"
          value={staffName}
          onChange={(e) => setStaffName(e.target.value)}
        />
      </label>
      <label>
        Ship Name:
        <input
          type="text"
          value={shipName}
          onChange={(e) => setShipName(e.target.value)}
        />
      </label>
      <label>
        Role:
        <input
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
      </label>
      <button type="submit">Filter</button>
    </form>
  );
};

export default FilterForm;