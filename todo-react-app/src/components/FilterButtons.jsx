import {
  FaList,
  FaCheck,
  FaClock,
} from "react-icons/fa";
function FilterButtons({ setFilter }) {
  return (
    <div className="filter-buttons">
      <button onClick={() => setFilter("all")}>
        <>
  <FaList />
  All
</>
      </button>

      <button
        onClick={() =>
          setFilter("completed")
        }
      >
        <>
  <FaCheck />
  Completed
</>
      </button>

      <button
        onClick={() =>
          setFilter("pending")
        }
      >
        <>
  <FaClock />
  Pending
</>
      </button>
    </div>
  );
}

export default FilterButtons;