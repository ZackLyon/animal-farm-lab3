// import functions and grab DOM elements
const dogPic = document.getElementById("dog-pic");
const bark = document.getElementById("bark");
const catPic = document.getElementById("cat-pic");
const meow = document.getElementById("meow");
const horsePic = document.getElementById("horse-pic");
const neigh = document.getElementById("neigh");
const lastPicked = document.getElementById("last-picked");
// initialize state

// set event listeners 
// get user input
// use user input to update state 
// update DOM to reflect the new state

dogPic.addEventListener('click', () => {
  bark.play();
  lastPicked.textContent = "Dog was last picked.";
});

catPic.addEventListener('click', () => {
  meow.play();
  lastPicked.textContent = "Cat was last picked.";
});

horsePic.addEventListener('click', () => {
  neigh.play();
  lastPicked.textContent = "Horse was last picked.";
});

