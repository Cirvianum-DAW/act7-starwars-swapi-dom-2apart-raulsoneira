import swapi from './swapi.js';

//Exemple d'inicialització de la llista de pel·lícules. Falten dades!
async function setMovieHeading(movieId, titleSelector, infoSelector, directorSelector) {
  // Obtenim els elements del DOM amb QuerySelector
  const title = document.querySelector(titleSelector);
  const info = document.querySelector(infoSelector);
  const director = document.querySelector(directorSelector);

  // Obtenim la informació de la pelicula
  const movieInfo = await swapi.getMovieInfo(movieId);
  // Injectem
  title.innerHTML = movieInfo.name;
  info.innerHTML = `Episode ${movieInfo.episodeID} - ${movieInfo.release}`
  director.innerHTML = "Director: " + movieInfo.director;
}

async function initMovieSelect(selector) {
  const select = document.querySelector(selector);

  const defaultOption = document.createElement('option');
  defaultOption.value = '';
  defaultOption.textContent = 'Selecciona una pel·lícula';
  select.appendChild(defaultOption);

  const movies = await swapi.listMoviesSorted();

  movies.forEach((movie) => {
    const option = document.createElement('option');
    option.value = movie.episodeID; // Considerant que l'ID de la pel·lícula és l'episodeID
    option.textContent = movie.name;
    select.appendChild(option);
  });

}

function setMovieSelectCallbacks() {
  // Obtenim el selector de pel·lícules
  const movieSelect = document.querySelector('#select-movie');

  // Afegim un event listener per a l'esdeveniment change
  movieSelect.addEventListener('change', async () => {
    // Obtenim l'episodeID de la pel·lícula seleccionada
    const selectedEpisodeID  = movieSelect.value;
    console.log(selectedEpisodeID);



    // Obtenim la capçalera de la pel·lícula
    const titleElement = document.querySelector('.movie__title');
    const infoElement = document.querySelector('.movie__info');
    const directorElement = document.querySelector('.movie__director');

    // Si s'ha seleccionat una pel·lícula
    if (selectedEpisodeID) {
      try {
        // Obtenim la informació de la pel·lícula seleccionada
        const movieInfo = await swapi.getMovieInfo(selectedEpisodeID);
        //console.log(movieInfo);

        // Actualitzem la capçalera amb la informació de la pel·lícula
        titleElement.textContent = movieInfo.name;
        infoElement.textContent = `Episode ${movieInfo.episodeID} - ${movieInfo.release}`;
        directorElement.textContent = "Director: " + movieInfo.director;
      } catch (error) {
        console.error('Error al obtenir la informació de la pel·lícula:', error);
      }
    } else {
      // Si s'ha seleccionat "Selecciona una pel·lícula", buidem la capçalera
      titleElement.textContent = '';
      infoElement.textContent = '';
      directorElement.textContent = '';
    }
  });
}


function deleteAllCharacterTokens() {
  
}

// EVENT HANDLERS //

function addChangeEventToSelectHomeworld() {}

async function _createCharacterTokens() {}

function _addDivChild(parent, className, html) {}



async function _handleOnSelectMovieChanged(event) {}

function _filmIdToEpisodeId(episodeID) {}

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
