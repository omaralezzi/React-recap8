import { useState } from 'react';

const MultiCheckbox = () => {
  const [checkboxes, setCheckboxes] = useState({
    box1: false,
    box2: false,
    box3: false,
  });

  const changeHandler = (e) => {
    setCheckboxes({ ...checkboxes, [e.target.name]: e.target.checked });
  };

  return (
    <div>
      <input
        type='checkbox'
        name='box1'
        checked={checkboxes.box1}
        onChange={changeHandler}
      />
      <input
        type='checkbox'
        name='box2'
        checked={checkboxes.box2}
        onChange={changeHandler}
      />
      <input
        type='checkbox'
        name='box3'
        checked={checkboxes.box3}
        onChange={changeHandler}
      />
    </div>
  );
};

export default MultiCheckbox;
