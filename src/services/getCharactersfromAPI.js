const getCharactersfromAPI = () => {
  fetch("https://rickandmortyapi.com/api/character")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const parsedCharacters = data.results.map((character) => {
        return {
          name: character.name,
          urlImage: character.image,
          species: character.species,
          planetOrigin: character.origin.name,
          lifeStatus: character.status,
          id: character.id,
          epNumber: character.episode.length,
        };
      });
      return parsedCharacters;
    });
};

export default getCharactersfromAPI;
