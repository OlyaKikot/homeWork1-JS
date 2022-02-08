// Task 2
async function asyncFetchPokemons() {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"
  );
  const pokemon = await response.json();
  return pokemon;
}

async function fetchPokemon(searchName) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${searchName}`
  );
  const pokemon = await response.json();
  const { id, height, weight, name } = pokemon;

  return { id, height, weight, name };
}

async function app() {
  const data = (await asyncFetchPokemons()).results;
  let pokemons = [];
  for (let i = 0; i < data.length; i++) {
    pokemons.push(await fetchPokemon(data[i].name));
  }

  localStorage.setItem("pokemons", JSON.stringify(pokemons));

  const sortedByWeight = sortByWeight(pokemons);
  console.log(sortedByWeight);
  sessionStorage.setItem("sortedByWeight", JSON.stringify(sortedByWeight));

  const sortedByHeight = sortByHeight(pokemons);
  console.log(sortedByHeight);
  sessionStorage.setItem("sortedByHeight", JSON.stringify(sortedByHeight));
}

function sortByHeight(pokemons) {
  return pokemons.sort((pok1, pok2) => pok1.height - pok2.height);
}

function sortByWeight(pokemons) {
  return pokemons.sort((pok1, pok2) => pok1.weight - pok2.weight);
}

app();
