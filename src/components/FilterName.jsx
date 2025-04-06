function FilterName({ onChangeName }) {
  const handleChangeName = (ev) => {
    onChangeName(ev.target.value);
  };

  return (
    <div className="searchName">
      <label className="searchName__label" htmlFor="name">
        Busca por nombre
      </label>
      <input
        className="searchName__field"
        id="name"
        type="text"
        onChange={handleChangeName}
        placeholder="Busca tu personaje favorito"
      />
    </div>
  );
}

export default FilterName;
