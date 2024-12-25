import { useState } from "react";
import Jug from "./Jug";

const Filler = () => {
  let [increaseValue, setIncreaseValue] = useState(0);
  console.log(increaseValue);
  const increaseWater = () => {
    setIncreaseValue((prev) => {
      if (prev === 0) return 1;

      const filling = prev + prev * 0.4;
      if (filling > 100) return 100;

      return filling;
    });
  };
  const decreaseWater = () => {
    setIncreaseValue((prev) => {
      if (prev < 1) return 0;
      return prev - prev * 0.2;
    });
  };
  return (
    <div>
      <Jug increaseValue={increaseValue} />
      <div className="mt-3 flex justify-center gap-4">
        <button
          onClick={decreaseWater}
          className="w-[50px] h-[50px] rounded-full bg-red-700 text-white"
        >
          &#8595;
        </button>
        <button
          onClick={increaseWater}
          className="w-[50px] h-[50px] rounded-full bg-green-700 text-white"
        >
          &#8593;
        </button>
      </div>
    </div>
  );
};

export default Filler;
