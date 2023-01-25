<script>
import { store } from '../data/store.js' //imported store object
import GraphicLoader from './utilities_components/GraphicLoader.vue'
import SelectTag from './utilities_components/SelectTag.vue'
import CardsList from './pokemon_components/CardsList.vue'
export default {
    name: 'AppMain',
    data() { return { store } },
    props: { type: Array },
    components: { GraphicLoader, SelectTag, CardsList },
    emits: ['change-option'],
    methods: {
        onChangeOption(word) {
            this.$emit('change-option', word);
        }
    }
}
</script>
<template>
    <!-- loader -->
    <graphic-loader v-if="store.isLoading"></graphic-loader>
    <!-- BEGINNING OF CONTENT -->
    <div v-else class="container wrap">>
        <h1>
            <figure class="title d-flex justify-content-center mt-2">
                <img src="../../public/img/pokedex.png" alt="pokedex">
            </figure>
        </h1>
        <!-- SELECT -->
        <select-tag :type="type" @change-option="onChangeOption"></select-tag>
        <!-- POKEMON'S LIST -->
        <cards-list></cards-list>
    </div>

</template>
<style lang="scss" scoped>
@use '../assets/scss/partials/mixins' as *;

select {
    display: block;
    margin: 0 auto;
    width: 488px;
    padding: 10px;
    border-radius: 5px;
    font-size: 1.5rem;
}

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