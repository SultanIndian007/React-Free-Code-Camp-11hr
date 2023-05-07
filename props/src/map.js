/*
Challenge 1:
Given an array of numbers, return an array of each number, squared
*/
const nums = [1, 2, 3, 4, 5]
// -->       [1, 4, 9, 16, 25]
// Your code here
const squared = nums.map(function(item) {
    return item * item
})
// console.log(squared)



/*
Challenge 2:
Given an array of strings, return an array where 
the first letter of each string is capitalized
*/

const names = ["alice", "bob", "charlie", "danielle"]
// -->        ["Alice", "Bob", "Charlie", "Danielle"]
// Your code here
const newNames = names.map((str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
})

// console.log(newNames)


/*
Challenge 3:
Given an array of strings, return an array of strings that wraps each
of the original strings in an HTML-like <p></p> tag.

E.g. given: ["Bulbasaur", "Charmander", "Squirtle"]
return: ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
*/

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
// -->          ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
// Your code here
const newPokemon = pokemon.map(() => {
    // return `<p>${pokemon[0]}</p> + <p>${pokemon[1]}</p> + <p>${pokemon[2]}</p>`
})
// console.log(newPokemon)

// sir's code
const elements = pokemon.map(mon => {
    return `<p>${mon}</p>`
})
console.log(elements)

