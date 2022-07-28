// random number between 1-6 for two images needed
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;


// image generator for first dice

let randomeDiceImage1 = `./images/dice${randomNumber1}.png`;
let image1 = document.querySelectorAll('img')[0];
console.log(image1);
image1.setAttribute('src', randomeDiceImage1);
image1.classList.add('shadow');

// image generator for second dice
let randomDiceImage2 = `./images/dice${randomNumber2}.png`;
let image2 = document.querySelectorAll('img')[1];
console.log(image2);
image2.setAttribute('src', randomDiceImage2);
image2.classList.add('shadow');
