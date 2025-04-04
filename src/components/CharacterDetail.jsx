import { Link } from "react-router-dom";

function CharacterDetail({ character }) {
  return (
    <li>
      <img src={character.urlImage} alt={character.name} />
      <h4>{character.name}</h4>
      <p>{character.species}</p>
      <p>{character.planetOrigin}</p>
      <p>Episodes: {character.epNumber}</p>
      <p>{character.lifeStatus}</p>
      <Link to="/">Volver atrás</Link>
    </li>
  );
}

export default CharacterDetail;
