// Task1

function fetchPokemons() {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0").then(
    (response) => {
      if (response.ok)
        response.json().then(({ results }) =>
          results.forEach((result, i) => {
            fetch(`https://pokeapi.co/api/v2/pokemon/${result.name}`).then(
              (response) => {
                if (response.ok)
                  response.json().then(({ name, id, height, weight }) => {
                    let arr = JSON.parse(localStorage.getItem("pokemons"));
                    if (i === 0) {
                      arr = [];
                      localStorage.setItem("pokemons", JSON.stringify(arr));
                    }
                    arr.push({ name, id, height, weight });
                    localStorage.setItem("pokemons", JSON.stringify(arr));

                    if (arr.length === 10) {
                      const sortedByWeight = sortByWeight(arr);
                      console.log(sortedByWeight);
                      sessionStorage.setItem(
                        "sortedByWeight",
                        JSON.stringify(sortedByWeight)
                      );

                      const sortedByHeight = sortByHeight(arr);
                      console.log(sortedByHeight);
                      sessionStorage.setItem(
                        "sortedByHeight",
                        JSON.stringify(sortedByHeight)
                      );
                    }
                  });
              }
            );
          })
        );
    }
  );
}
fetchPokemons();

function sortByHeight(pokemons) {
  return pokemons.sort((pok1, pok2) => pok1.height - pok2.height);
}

function sortByWeight(pokemons) {
  return pokemons.sort((pok1, pok2) => pok1.weight - pok2.weight);
}
