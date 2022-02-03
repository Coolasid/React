import { useEffect, useState } from "react";

export const Counter = () => {
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    let id = setInterval(() => {
      console.log("setInterval", timer);
      setTimer((preValue) => {
        if (preValue <= 0) {
          clearInterval(id);
          return 0;
        }
        return preValue - 1;
      });
    }, 1000);

    return () => {
      //Unmounting
      clearInterval(id);
    };
  }, []);

  return <div>Timer: {timer}</div>;
};
