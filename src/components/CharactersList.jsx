import CharacterCard from "./CharacterCard";

function CharactersList({ charactersData }) {
  return (
    <section>
      <ul>
        {/* {charactersData.map((character) => {
          return <CharacterCard character={character} key={character.id} />;
        })} */}
      </ul>
    </section>
  );
}

export default CharactersList;
