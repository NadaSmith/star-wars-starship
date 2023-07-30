//function to fetch all starships
export function getAllStarships() {
    //define the base url for swapi - the url to fetch data from
    const url = 'https://swapi.dev/api/starships';
    return fetch(url)
        .then((response) => response.json)
        .then((data) => data.results)
        .catch((error) => console.error("Error fetching starships:", error));
}

