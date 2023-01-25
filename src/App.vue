<script>
import axios from 'axios'
import AppMain from './components/AppMain.vue'
import { store } from './data/store.js' //imported store object
export default {
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
    }
  },
  mounted() {
    this.fetchPokemons(store.pokedexUri)
  }
}
</script>

<template>
  <app-main></app-main>
</template>

<style lang="scss">
@use './assets/scss/style.scss';
</style>
