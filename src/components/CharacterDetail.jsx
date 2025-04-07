import { Link } from "react-router-dom";

function CharacterDetail({ character }) {
  return (
    <li className="detail">
      <img
        className="detail__image"
        src={character.urlImage}
        alt={character.name}
      />
      <div className="detail__text">
        <h4>Name: {character.name}</h4>
        <p>Species: {character.species}</p>
        <p>Planet of origin: {character.planetOrigin}</p>
        <p>Number of episodes: {character.epNumber}</p>
        <p>Vital Status: {character.lifeStatus}</p>
        <Link className="detail__button" to="/">
          Back to List
        </Link>
      </div>
    </li>
  );
}

export default CharacterDetail;
