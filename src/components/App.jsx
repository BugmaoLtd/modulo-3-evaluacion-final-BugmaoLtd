import "../scss/App.scss";
import Header from "./Header";
import CharacterList from "./CharactersList";
import { useEffect, useState } from "react";
import getCharactersfromAPI from "../services/getCharactersfromAPI";
import CharactersList from "./CharactersList";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharactersfromAPI().then((charactersList) => {
      setCharacters(charactersList);
    });
  }, []);

  return (
    <>
      <Header />
      <main>
        <CharacterList characterData={characters} />
      </main>
    </>
  );
}

export default App;
