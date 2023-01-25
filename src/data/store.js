import { reactive } from 'vue'; //destructuring function 'reactive' from vue

//creating a reactive object
export const store = reactive({
    isLoading: false,
    pokedexUri: 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons?per=10&page=6',
    pokemons: []
})