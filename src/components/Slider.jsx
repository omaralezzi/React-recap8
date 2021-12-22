import { useState } from 'react';

const Slider = () => {
  const [slide, setSlide] = useState(50);

  return (
    <div>
      <input
        type='range'
        min='1'
        max='300'
        value={slide}
        onChange={(e) => setSlide(e.target.value)}
      />
    </div>
  );
};

export default Slider;
