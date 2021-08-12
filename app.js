// import functions and grab DOM elements
const dogPic = document.getElementById('dog-pic');
const bark = document.getElementById('bark');
const catPic = document.getElementById('cat-pic');
const meow = document.getElementById('meow');
const horsePic = document.getElementById('horse-pic');
const neigh = document.getElementById('neigh');
const lastPicked = document.getElementById('last-picked');
// initialize state

// set event listeners 
// get user input
// use user input to update state 
// update DOM to reflect the new state


function soundAndTextChange(sound, animal) {
    sound.play();
    lastPicked.textContent = animal + ' was last picked';
}

dogPic.addEventListener('click', () => {
    soundAndTextChange(bark, 'Dog');
});

catPic.addEventListener('click', () => {
    soundAndTextChange(meow, 'Cat');
});

horsePic.addEventListener('click', () => {
    soundAndTextChange(neigh, 'Horse');
});

document.addEventListener('keydown', (event) => {
    if(event.key === 'd'){
        soundAndTextChange(bark, 'Dog');
    }
})

document.addEventListener('keydown', (event) => {
    if(event.key === 'c'){
        soundAndTextChange(meow, 'Cat');
    }
})

document.addEventListener('keydown', (event) => {
    if(event.key === 'h'){
        soundAndTextChange(neigh, 'Horse');
    }
})