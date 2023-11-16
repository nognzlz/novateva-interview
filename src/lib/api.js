export async function fetchAPI(url, params) {
  let paramsBuilt = "";

  if (params) {
    paramsBuilt = new URLSearchParams({
      search: params.search,
    });
  }

  const response = await fetch(`https://swapi.dev/api/${url}/${paramsBuilt}`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
  });

  const data = await response.json();

  return data;
}
