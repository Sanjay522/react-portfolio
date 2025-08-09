import { useEffect, useState } from "react";

type CounterProps = {
  end: number;
  duration?: number;
  suffix?: string;
  start: boolean; // 👈 whether to start counting
};

const Counter: React.FC<CounterProps> = ({ end, duration = 2000, suffix = "", start }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return; // Don't start unless triggered

    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const newValue = Math.floor(progress * end);
      setValue(newValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, start]);

  return (
    <span>
      {value}
      {suffix}
    </span>
  );
};

export default Counter;
