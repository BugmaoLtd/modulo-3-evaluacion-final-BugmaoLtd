import CharacterCard from "./CharacterCard";

function CharactersList({ charactersData }) {
  return (
    <section>
      <ul>
        {charactersData.map((card) => {
          return <CharacterCard cardData={card} key={card.id} />;
        })}
      </ul>
    </section>
  );
}

export default CharactersList;
