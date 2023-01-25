import { reactive } from 'vue'; //destructuring function 'reactive' from vue

//creating a reactive object
export const store = reactive({
    isLoading: false,
    pokemons: []
})