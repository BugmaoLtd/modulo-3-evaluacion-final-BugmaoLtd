import FilterName from "./FilterName";

function Filters({ onChangeName }) {
  return (
    <form action="">
      <FilterName onChangeName={onChangeName} />
    </form>
  );
}

export default Filters;
