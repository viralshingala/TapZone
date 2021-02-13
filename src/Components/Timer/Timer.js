import React, { useEffect, useState } from "react";
import { Badge, Slider } from "react-native-elements";

const Timer = ({ limit }) => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer < limit) {
        setTimer((seconds) => seconds + 1);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [limit, timer]);

  return (
    <>
      <Slider
        value={timer / limit}
        animateTransitions
        trackStyle={{ height: 7, backgroundColor: "transparent" }}
        thumbStyle={{ height: 20, width: 20, backgroundColor: "transparent" }}
        thumbProps={{
          children: (
            <Badge
              badgeStyle={{ height: 25, width: 25 }}
              value={`${limit - timer}s`}
              status="primary"
            />
          )
        }}
      />
    </>
  );
};

export default Timer;
