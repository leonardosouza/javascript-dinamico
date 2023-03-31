
const myPokemons = ["bulbasaur","charizard","machamp","abra","umbreon"];

async function request(url) {
  const response = await fetch(url);
  return await response.json();
  //console.log(await response.json())
}

function getPokemonList() {
   return request('https://pokeapi.co/api/v2/pokemon?limit=251')
}
function getPokemon(pokemon){
    //console.log("getPokemon: ",pokemon)
   return request(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
} 

async function loadPokemons(){
   const list = await getPokemonList();
   //console.log("lista",list);

   const pokemonList = await list.results.filter( (element)=> 
        myPokemons.some( (myPokemon)=> element.name === myPokemon )
   );

   const arrPokemon = pokemonList.map(async (pokemon)=> await getPokemon(pokemon.name))
   //console.log(arrPokemon)
     Promise.all(arrPokemon ).then((retorno)=>{
    
     retorno.forEach( (pokemon)=> {
        showPokemon(pokemon.sprites.front_default)
     } )
    })
   
   //console.log("pokemon: ", pokemon)
}

function showPokemon(img){
  const elementDiv = document.createElement("div");
  elementDiv.innerHTML = ` <img src='${img}' /> `;

  container.appendChild(elementDiv)
}

loadPokemons();

