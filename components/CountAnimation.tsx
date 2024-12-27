import { useEffect, useState } from 'react';

const useCountAnimation = (end: number, duration: number) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 1000 * 60); // Calculate increment per frame (assuming 60fps)
    const step = () => {
      start += increment;
      if (start < end) {
        setCount(Math.round(start));
        requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    requestAnimationFrame(step);
  }, [end, duration]);

  return count;
};

export default useCountAnimation;