const ask = require('readline-sync');

var name = "Sakura";
var text = "game";
var theme = "adventure by the riverbank";
var characters = ["sakura", "kyla", "maya", "erika"];
var settings = ["farm", "forest", "river"];
var powers = ['plant', 'rock', 'air', 'water'];

// console.log(name)
// console.log(text)

// console.log(theme)

// console.log(characters[0])
// console.log(characters[1])
// console.log(characters[2])
// console.log(characters[3])
// console.log(settings[0])
// console.log(settings[1])
// console.log(settings[2])
// console.log(powers[0])
// console.log(powers[1])
// console.log(powers[2])
// console.log(powers[3])

let characterName = ask.question("May I have your character's name?")
let characterGender = ask.question("Is your character a girl or boy?")

let startGirl =()=> {
  console.log(characterName + " you're going to hollywood")
 
}

let startBoy =()=> {
  console.log(characterName + " you're going to play a professional sport")
}


if (characterGender === "girl"){
 startGirl()
} else {
  startBoy()
}

console.log ("what's your career?")
console.log("movie director")

console.log("movie star")
console.log("singer")
console.log("designer")

let careerchosen = ask.question("type your career now: ")

if (careerchosen === "movie star"){
  //have character name movie
  let moviename = ask.question("what is the name of your movie?")
let characterName = ask.question("what are the names of the people in "+ moviename+"?")
} 