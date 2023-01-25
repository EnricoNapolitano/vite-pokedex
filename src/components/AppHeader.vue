<script>
import SelectTag from './utilities_components/SelectTag.vue';
export default {
    name: 'AppHeader',
    component: { SelectTag }
}
</script>
<template>
    <header class="wrap">
        <h1>
            <figure class="title d-flex justify-content-center mt-2">
                <img src="../../public/img/pokedex.png" alt="pokedex">
            </figure>
        </h1>
        <!-- SELECT -->
        <select-tag :type="type" @change-option="onChangeOption"></select-tag>
    </header>
</template>