function CharacterCard({ cardData }) {
  return (
    <li>
      <img src={cardData.urlImage} alt={cardData.name} />
      <h4>{cardData.name}</h4>
      <p>{cardData.species}</p>
    </li>
  );
}

export default CharacterCard;
