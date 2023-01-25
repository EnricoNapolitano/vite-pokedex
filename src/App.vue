<script>
import axios from 'axios'
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import { store } from './data/store.js' //imported store object

let nIncrement = 1;

export default {
  data() {
    return {
      pokedexUri: 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons',
      pokemonsType: [],
      SelectedType: '',
    }
  },
  components: { AppHeader, AppMain },
  methods: {
    //get base uri of pokemon's API
    fetchPokemons(uri) {
      store.isLoading = true;
      axios.get(uri)
        .then((res) => {
          //put the array in the store.js
          store.pokemons = res.data.docs;
        }).catch().then(() => {
          store.isLoading = false;
        })
    },
    //create an array of pokemons' type
    fetchPokemonsType(endpoint) {
      axios.get(endpoint)
        .then((res) => {
          this.pokemonsType = res.data;
          this.pokemonsType.unshift('-- COME BACK --');
        })
    },
    //gives back an array of pokemons belonging to a same type
    fetchSameType(word) {
      this.SelectedType = word;
      if (word === '-- COME BACK --') this.fetchPokemons(this.pokedexUri);
      else {
        axios.get(`${this.pokedexUri}?eq[Type1]=${word}`)
          .then((res) => {
            store.pokemons = res.data.docs;
          })
      }
    },
    changePage(n) {
      nIncrement += n;
      axios.get(`${this.pokedexUri}?per=10&page=${nIncrement}`)
        .then((res) => {
          store.pokemons = res.data.docs;
        })
    }
  },
  mounted() {
    this.fetchPokemons(this.pokedexUri)
    this.fetchPokemonsType(`${this.pokedexUri}/types1`)
  }
}
</script>

<template>
  <app-header :type="pokemonsType" @change-option="fetchSameType"></app-header>
  <app-main @button-clicked="changePage"></app-main>
</template>

<style lang="scss">
@use './assets/scss/style.scss';
</style>
