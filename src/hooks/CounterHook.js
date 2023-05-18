import React, { useState, useEffect } from "react";

const CounterHook = ({ targetNumber }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 20);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <span>{count <= targetNumber ? count : targetNumber}+</span>;
};

export default CounterHook;