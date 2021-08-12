// import functions and grab DOM elements
const dogPic = document.getElementById("dog-pic");
const bark = document.getElementById("bark");
const catPic = document.getElementById("cat-pic");
const meow = document.getElementById("meow");
const horsePic = document.getElementById("horse-pic");
const neigh = document.getElementById("neigh");
// initialize state

// set event listeners 
// get user input
// use user input to update state 
// update DOM to reflect the new state

dogPic.addEventListener('click', () => {
  bark.play();
});

catPic.addEventListener('click', () => {
  meow.play();
});

horsePic.addEventListener('click', () => {
  neigh.play();
});