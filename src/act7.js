import swapi from "./swapi.js";

//Exemple d'inicialització de la llista de pel·lícules. Falten dades!
async function setMovieHeading(
  movieId,
  titleSelector,
  infoSelector,
  directorSelector
) {
  // Obtenim els elements del DOM amb QuerySelector
  const title = document.querySelector(titleSelector);
  const info = document.querySelector(infoSelector);
  const director = document.querySelector(directorSelector);

  if (!movieId) {
    title.innerHTML = " ";
    info.innerHTML = " ";
    director.innerHTML = " ";
    return
  }

  // Obtenim la informació de la pelicula
  const movieInfo = await swapi.getMovieInfo(movieId);
  // Injectem
  title.innerHTML = movieInfo.name;
  info.innerHTML = `Episode ${movieInfo.episodeID} - ${movieInfo.release}`;
  director.innerHTML = "Director: " + movieInfo.director;
}

async function initMovieSelect(selector) {
  const movies = await swapi.listMoviesSorted();

  const select = document.querySelector(selector);

  const option = document.createElement("option");

  option.value = "";
  option.textContent = "Selecciona una pel·lícula";
  select.appendChild(option);

  movies.forEach((movie) => {
    const option = document.createElement("option");
    option.value = _filmIdToEpisodeId(movie.episodeID);
    option.textContent = movie.name;
    select.appendChild(option);
  });
}

// Defineix la funció per establir els callbacks del selector de pel·lícules
function setMovieSelectCallbacks() {
  // Obtenim el selector de pel·lícules
  const movieSelect = document.querySelector("#select-movie");

  // Afegim un event listener per a l'esdeveniment change
  movieSelect.addEventListener("change", _handleOnSelectMovieChanged);
}
async function _handleOnSelectMovieChanged(event) {
  // Obtenim el valor seleccionat
  const movieID = event.target.value;

    await setMovieHeading(
      movieID,
      ".movie__title",
      ".movie__info",
      ".movie__director"
    );
}

// Funció per eliminar totes les fitxes de personatges
function deleteAllCharacterTokens() {
  const characterTokens = document.querySelectorAll(".list__item.character");
  characterTokens.forEach((token) => token.remove());
}

// EVENT HANDLERS //

function addChangeEventToSelectHomeworld() {}

async function _createCharacterTokens() {}

function _addDivChild(parent, className, html) {}

function _filmIdToEpisodeId(episodeID) {
  const mapping = episodeToMovieIDs.find((item) => item.e === episodeID);

  if (mapping) {
    return mapping.m;
  } else {
    return null;
  }
}

// "https://swapi.dev/api/films/1/" --> Episode_id = 4 (A New Hope)
// "https://swapi.dev/api/films/2/" --> Episode_id = 5 (The Empire Strikes Back)
// "https://swapi.dev/api/films/3/" --> Episode_id = 6 (Return of the Jedi)
// "https://swapi.dev/api/films/4/" --> Episode_id = 1 (The Phantom Menace)
// "https://swapi.dev/api/films/5/" --> Episode_id = 2 (Attack of the Clones)
// "https://swapi.dev/api/films/6/" --> Episode_id = 3 (Revenge of the Sith)

let episodeToMovieIDs = [
  { m: 1, e: 4 },
  { m: 2, e: 5 },
  { m: 3, e: 6 },
  { m: 4, e: 1 },
  { m: 5, e: 2 },
  { m: 6, e: 3 },
];

function _setMovieHeading({ name, episodeID, release, director }) {}

function _populateHomeWorldSelector(homeworlds) {}

/**
 * Funció auxiliar que podem reutilitzar: eliminar duplicats i ordenar alfabèticament un array.
 */
function _removeDuplicatesAndSort(elements) {
  // Al crear un Set eliminem els duplicats
  const set = new Set(elements);
  // tornem a convertir el Set en un array
  const array = Array.from(set);
  // i ordenem alfabèticament
  return array.sort(swapi._compareByName);
}

const act7 = {
  setMovieHeading,
  setMovieSelectCallbacks,
  initMovieSelect,
  deleteAllCharacterTokens,
  addChangeEventToSelectHomeworld,
};

export default act7;
