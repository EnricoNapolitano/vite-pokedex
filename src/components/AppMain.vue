<script>
import { store } from '../data/store.js' //imported store object
import GraphicLoader from './utilities_components/GraphicLoader.vue'
import SelectTag from './utilities_components/SelectTag.vue'
import CardsList from './pokemon_components/CardsList.vue'
export default {
    name: 'AppMain',
    data() { return { store } },
    components: { GraphicLoader, SelectTag, CardsList },
}
</script>
<template>
    <!-- loader -->
    <graphic-loader v-if="store.isLoading"></graphic-loader>
    <!-- BEGINNING OF CONTENT -->
    <div v-else class="container wrap">
        <!-- POKEMON'S LIST -->
        <cards-list></cards-list>
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