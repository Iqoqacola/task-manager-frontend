import { useCount, useDispatchCount } from "../context/CountContex";

const Counter = () => {
  const count = useCount();
  const dispatch = useDispatchCount();

  return (
    <>
      <h3>Counter</h3>
      <p className="number">{count.number}</p>
      <button
        className="add-number"
        onClick={() => {
          dispatch({ type: "add_number" });
        }}
      >
        +
      </button>
    </>
  );
};

export default Counter;
