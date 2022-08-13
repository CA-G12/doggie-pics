// --------------- send request to server to get breeds array ---------------
let breeds;
fetch('/breeds', (response) => {
  breeds = response;
});
const imageContainer = document.querySelector('.images-section');
const breedForm = document.querySelector('.search-input-form');

// --------------- handle matches to user input -----------------------------
const searchInput = document.querySelector('.search');
const autoComContainer = document.querySelector('.autocom-box');
let autoComchoices = document.querySelectorAll('.autocom-box li');
searchInput.addEventListener('keyup', (e) => {
  const value = e.target.value;

  if (value !== '') {
    // const matches = breeds.filter((ele) => ele.startsWith(value.toLowerCase()));
    const matches = search(breeds, value);
    const autoComResults = matches.map((ele) => `<li>${ele}</li>`);
    autoComContainer.innerHTML = autoComResults.join('');
    autoComchoices = document.querySelectorAll('.autocom-box li');
    // console.log(autoComchoices);
  } else {
    autoComContainer.innerHTML = '';
  }

  // --------------- handling user choice (put it in search input value)  -----------
  autoComchoices.forEach((li) => {
    li.addEventListener('click', (e2) => {
      searchInput.value = e2.target.textContent;
      autoComContainer.innerHTML = '';
    });
  });
});

function getRandomId(length) {
  return Math.floor(Math.random() * length);
}

function createImageElement(src) {
  const newImage = document.createElement('img');
  newImage.classList.add('image');
  newImage.src = imageLink(src);
  imageContainer.appendChild(newImage);
}
function imageLink(src) {
  return src.message[getRandomId(src.message.length)];
}
breedForm.addEventListener('submit', (e) => {
  e.preventDefault();
  imageContainer.innerHTML = '';
  const breed = searchInput.value;
  const doggyUrl = `https://dog.ceo/api/breed/${breed}/images`;
  for (let i = 0; i < 4; i++ ) {
    fetch(doggyUrl, createImageElement);
  }
});
