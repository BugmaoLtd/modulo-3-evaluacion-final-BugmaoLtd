import { Link } from "react-router-dom";

function CharacterDetail(characterDetail) {
  return (
    <li>
      <img src={characterDetail.urlImage} alt={characterDetail.name} />
      <h4>{characterDetail.name}</h4>
      <p>{characterDetail.species}</p>
      <p>Planeta de origen</p>
      <p>Número de episodios</p>
      <p>Estatus vital</p>
    </li>
  );
}

export default CharacterDetail;
