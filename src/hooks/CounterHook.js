import { useState, useEffect } from 'react';

function CounterHook() {
  const [count, setCount] = useState(0);
  let intervalId;

  useEffect(() => {
    intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    // componentWillUnmount'ta çalışacak olan temizleme fonksiyonu
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (count >= 2) {
              // 5 saniye sonra sayacı durdur
      clearInterval(intervalId);
    }
  }, [count]);

  return (
    <div>
      <h1> {count}</h1>
    </div>
  );
}

export default CounterHook;