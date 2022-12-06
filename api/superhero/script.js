const Supe = "5658302540916557";
const base_url = `https://www.superheroapi.com/api.php/${Supe}`;
const Herobutton = document.getElementById("HeroButton");
const heroImage = document.getElementById("heroImage");
const Search = document.getElementById("searchbutton");
const searchInput = document.getElementById("searchInput");

const getSuperHero = (id, name) => {
  fetch(`${base_url}/${id}`)
    .then((response) => response.json())
    .then((json) => {
      showHeroInfo(json);
    });
};

const randomHeroes = () => {
  const numberOfHeroes = 731;
  return Math.ceil(Math.random() * numberOfHeroes + 1);
};

const statToEmoji = {
  intelligence: "🧠",
  strength: "💪🏾",
  speed: "⚡️",
  durability: "🏋🏾",
  power: "💣",
  combat: "⚔️",
};

const showHeroInfo = (character) => {
  const name = `<h2>${character.name}</h2>`;
  const img = `<img src="${character.image.url}"/>`;
  const stats = Object.keys(character.powerstats)
    .map((stat) => {
      return `<p> ${statToEmoji[stat]} ${stat.toUpperCase()}: ${
        character.powerstats[stat]
      }</p>`;
    })
    .join("");

  heroImage.innerHTML = `${name}${img}${stats}`;
};

Herobutton.onclick = () => getSuperHero(randomHeroes());

const getSearchSuperHero = (name) => {
  fetch(`${base_url}/search/${name}`)
    .then((response) => response.json())
    .then((json) => {
      const hero = json.results[0];
      showHeroInfo(hero)
    });
};

Search.onclick = () => getSearchSuperHero(searchInput.value);
