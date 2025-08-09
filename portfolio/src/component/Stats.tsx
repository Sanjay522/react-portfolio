import React from "react";
import Counter from "./Counter";
import { useInView } from "react-intersection-observer";

type StatItem = {
  number: number;
  suffix?: string;
  name: string;
};

const Stats: React.FC = () => {
  const stats: StatItem[] = [
    { number: 60, suffix: "+", name: "GLOBAL CLIENTS" },
    { number: 15, suffix: "+", name: "PROJECTS COMPLETED" },
    { number: 4, suffix: "+", name: "YEARS OF EXPERIENCE" },
    { number: 4, suffix: "+", name: "YEARS OF EXPERIENCE" },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true, // start only once
    threshold: 0.3, // % of element visible before triggering
  });

  return (
    <div ref={ref}>
      <div
        style={{
          position: "absolute",
          top: "802.5%",
          left: "0",
          right: "0",
          height: "1px",
          width: "95%",
          margin: "auto",
          backgroundColor: "#232023",
        }}
      ></div>

      <div>
        <div className="relative flex justify-between">
          <p className="hidden sm:block">05</p>
          <p className="font-bold">//STATS</p>
          <p>FUN FACT</p>
        </div>

        <div className="relative bg-checkered grid grid-cols-2 gap-5 sm:grid-cols-4 w-full place-items-center border-[#232023] border-y my-25">
          {stats.map((item, index) => (
            <div key={index} className="relative p-5">
              <p className="sm:text-9xl text-7xl font-bold">
                <Counter
                  end={item.number}
                  suffix={item.suffix}
                  duration={1500}
                  start={inView} // 👈 start when visible
                />
              </p>
              <p className="text-gray-600 text-[12px] sm:text[16px]">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
