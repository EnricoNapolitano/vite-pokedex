<script>
import axios from 'axios'
import AppMain from './components/AppMain.vue'
import { store } from './data/store.js' //imported store object
export default {
  data() {
    return {
      pokedexUri: 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons',
      pokemonsType: [],
      SelectedType: '',
    }
  },
  components: { AppMain },
  methods: {
    fetchPokemons(uri) {
      store.isLoading = true;
      axios.get(uri)
        .then((res) => {
          store.pokemons = res.data.docs;
        }).catch().then(() => {
          store.isLoading = false;
        })
    },
    fetchPokemonsType(endpoint) {
      axios.get(endpoint)
        .then((res) => {
          this.pokemonsType = res.data;
          this.pokemonsType.unshift('-- COME BACK --');
        })
    },
    fetchSameType(word) {
      this.SelectedType = word;
      if (word === '-- COME BACK --') this.fetchPokemons(this.pokedexUri);
      else {
        axios.get(`${this.pokedexUri}?eq[Type1]=${word}`)
          .then((res) => {
            store.pokemons = res.data.docs;
          })
      }
    }
  },
  mounted() {
    this.fetchPokemons(this.pokedexUri)
    this.fetchPokemonsType(`${this.pokedexUri}/types1`)
  }
}
</script>

<template>
  <app-main :type="pokemonsType" @change-option="fetchSameType"></app-main>
</template>

<style lang="scss">
@use './assets/scss/style.scss';
</style>
