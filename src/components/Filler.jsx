import Jug from "./Jug";

const Filler = () => {
  const increaseWater = () => {};
  const decreaseWater = () => {};
  return (
    <div>
      <Jug />
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
