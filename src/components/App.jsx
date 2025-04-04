import "../scss/App.scss";
import Header from "./Header";
import CharacterList from "./CharactersList";
import { useEffect } from "react";
import getCharactersFromAPI from "../services/getCharactersfromAPI";

function App() {
  useEffect(() => {
    getCharactersFromAPI().then(charactersList) => {
      console.log(charactersList);
    }
  }, []);

  return (
    <>
      <Header />
      <main>
        <CharacterList />
      </main>
    </>
  );
}

export default App;
