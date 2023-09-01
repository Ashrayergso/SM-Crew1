import React, { useState } from 'react';

const FilterForm = ({ onFilter }) => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onFilter({ name, role });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Staff Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Role:</label>
        <input
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
      </div>
      <button type="submit">Filter</button>
    </form>
  );
};

export default FilterForm;