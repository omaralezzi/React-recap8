import { useState } from 'react';

const Dropdown = () => {
  const [select, setSelect] = useState('Berlin');

  return (
    <div>
      <select value={select} onChange={(e) => setSelect(e.target.value)}>
        <option value='Berlin'>Berlin</option>
        <option value='London'>London</option>
        <option value='Madrid'>Madrid</option>
      </select>
    </div>
  );
};

export default Dropdown;
