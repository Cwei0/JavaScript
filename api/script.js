const dogImageDiv = document.getElementById("dogImage");
const dogButtonDiv = document.getElementById("dogButton");

const newDog = () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((json) => {
      dogImageDiv.innerHTML = `<img src="${json.message}"/>`;
    });
};

dogButtonDiv.onclick = () => newDog();
