import "../scss/App.scss";
import Header from "./Header";
import { useEffect, useState } from "react";
import getCharactersfromAPI from "../services/getCharactersfromAPI";
import CharactersList from "./CharactersList";
import Filters from "./Filters";

function App() {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState("");

  useEffect(() => {
    getCharactersfromAPI().then((charactersList) => {
      setCharacters(charactersList);
    });
  }, []);

  const changeName = (valueInput) => {
    setFilterName(valueInput);
  };

  const filteredCharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(filterName);
  });

  return (
    <>
      <Header />
      <main>
        <Filters onChangeName={changeName} />
        <CharactersList charactersData={filteredCharacters} />
      </main>
    </>
  );
}

export default App;
