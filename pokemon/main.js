// objetos JS Son conjuntos de datos agrupados en pares clave-valor



let id= parseInt(prompt("¿qué id quieres ver=?"));

//template literal
let urlPokemon = `https://pokeapi.co/api/v2/pokemon/${id}`;

fetch(urlPokemon)
.then((response) => response.json())
.then((data) => {

let nombre = data.name;
let image = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +id + ".png";

document.getElementById("nombre").innerHTML = nombre;
//document.getElementById("imagen").src = image;

document.getElementById("extra2").innerHTML = "<img src='" + image +  "' style='width:350px'/>";
let todosValores = Object.values(data);
console.log(todosValores);

})