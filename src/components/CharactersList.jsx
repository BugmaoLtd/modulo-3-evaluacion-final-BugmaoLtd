import CharacterCard from "./CharacterCard";

function CharactersList({ charactersData }) {
  return (
    <section className="section">
      <ul className="cardList">
        {charactersData.map((card) => {
          return <CharacterCard cardData={card} key={card.id} />;
        })}
      </ul>
    </section>
  );
}

export default CharactersList;
