<script>
import { store } from '../data/store.js' //imported store object
import ButtonsPage from './utilities_components/ButtonsPage.vue'
import AppLoader from './utilities_components/AppLoader.vue'
import PokemonCard from './pokemon_components/PokemonCard.vue'
export default {
    name: 'AppMain',
    data() {
        return {
            store
        }
    },
    components: { AppLoader, ButtonsPage, PokemonCard }
}
</script>
<template>
    <app-loader v-if="store.isLoading"></app-loader>
    <div v-else class="container wrap">
        <figure class="d-flex justify-content-center mt-2">
            <img src="../../public/img/pokedex.png" alt="pokedex">
        </figure>
        <!-- bootstrap classes in ul's tag -->
        <ul class="row-cols-sm-3 row row-cols-lg-5 justify-content-center">
            <!-- component pokemon card -->
            <pokemon-card v-for="pokemon in store.pokemons" :key="pokemon._id" :name="pokemon.name"
                :type="pokemon.type1" :img="pokemon.imageUrl" :weight="pokemon.weight">
            </pokemon-card>
            <ButtonsPage></ButtonsPage>
        </ul>
    </div>

</template>
<style lang="scss" scoped>
@use '../assets/scss/partials/mixins' as *;

ul {
    margin-top: 20px;
    padding: 50px 30px 0;
    border-radius: 30px;
    background-color: white;
    box-shadow: inset 0px 0px 1px 6px rgb(0 0 0 / 20%);
    @include frame;
}

.wrap {
    position: relative;
}
</style>