async function getPopularRepos(org) {
  const url = `https://api.github.com/search/repositories?q=org:${org}&sort=stars&order=desc&per_page=10`;
  const response = await fetch(url);
  const data = await response.json();
  if (response.ok) {
    return data.items.map(({ full_name }) => full_name);
  } else {
    throw new Error(`Error fetching repos: ${data.message}`);
  }
}
(async () => {
  try {
    console.log(await getPopularRepos("google"));
  } catch (error) {
    console.error(error.message);
  }
})();
