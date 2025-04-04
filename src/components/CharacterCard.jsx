import { Link } from "react-router-dom";

function CharacterCard({ cardData }) {
  return (
    <li>
      <Link to={`/detail/${cardData.id}`}>
        <img src={cardData.urlImage} alt={cardData.name} />
        <h4>{cardData.name}</h4>
        <p>{cardData.species}</p>
      </Link>
    </li>
  );
}

export default CharacterCard;
