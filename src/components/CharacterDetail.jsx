import { Link } from "react-router-dom";

function CharacterDetail({ character }) {
  return (
    <li className="detail">
      <img src={character.urlImage} alt={character.name} />
      <h4>Name: {character.name}</h4>
      <p>Species: {character.species}</p>
      <p>Planet of origin: {character.planetOrigin}</p>
      <p>Number of episodes: {character.epNumber}</p>
      <p>Vital Status: {character.lifeStatus}</p>
      <Link className="button" to="/">
        Volver atrás
      </Link>
    </li>
  );
}

export default CharacterDetail;
