function FilterName({ onChangeName }) {
  const handleChangeName = (ev) => {
    onChangeName(ev.target.value);
  };

  return (
    <div>
      <label htmlFor="name">Busca por nombre</label>
      <input id="name" type="text" onChange={handleChangeName} />
    </div>
  );
}

export default FilterName;
