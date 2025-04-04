import "../scss/App.scss";
import Header from "./Header";
import { useEffect, useState } from "react";
import getCharactersfromAPI from "../services/getCharactersfromAPI";
import CharactersList from "./CharactersList";
import Filters from "./Filters";
import { Routes, Route, useLocation, matchPath } from "react-router-dom";
import CharacterDetail from "./CharacterDetail";

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

  const { pathname } = useLocation();
  const routeData = matchPath("/detail/:id", pathname);

  let idCharacterRoute = undefined;
  if (routeData !== null) {
    idCharacterRoute = routeData.params.id;
  }

  const characterSelected = filteredCharacters.find((character) => {
    console.log(character);
    return String(character.id) === idCharacterRoute;
  });

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filters onChangeName={changeName} />
                <CharactersList charactersData={filteredCharacters} />
              </>
            }
          />
          <Route
            path="/detail/:id"
            element={<CharacterDetail character={characterSelected} />}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
