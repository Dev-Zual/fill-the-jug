import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const Jug = ({ increaseValue }) => {
  const [isFilling, setIsFilling] = useState(false);

  useEffect(() => {
    setIsFilling(true);

    const timeoutId = setTimeout(() => {
      setIsFilling(false);
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [increaseValue]);

  return (
    <div className="w-[200px] h-[400px] border-black rounded-sm border-t-0 border-2 relative">
      <div
        className={`bg-blue-700 w-full bottom-0 absolute ${
          isFilling && "animate-wave"
        }`}
        style={{ height: `${increaseValue}%` }}
      >
        <p
          className={`text-center text-white mt-2 ${
            isFilling && "animate-pulse"
          } text-xl`}
        >
          {Math.round(increaseValue)}%
        </p>
      </div>
    </div>
  );
};

Jug.propTypes = {
  increaseValue: PropTypes.number.isRequired,
};

export default Jug;
