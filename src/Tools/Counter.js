import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const Counter = ({targetCount}) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  if (inView && count < targetCount) {
    setTimeout(() => {
      setCount(prevCount => prevCount + 1);
    }, 1); // Increase count every 20 milliseconds for a smoother effect
  }

  return <div ref={ref}>{count}</div>;
};

export default Counter;
