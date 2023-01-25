<script>
import SelectTag from './utilities_components/SelectTag.vue';
export default {
    name: 'AppHeader',
    props: { type: Array },
    components: { SelectTag },
    emits: ['change-option'],
    methods: {
        onChangeOption(word) {
            this.$emit('change-option', word);
        }
    }
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

<style scoped>
select {
    display: block;
    margin: 0 auto;
    width: 488px;
    padding: 10px;
    border-radius: 5px;
    font-size: 1.5rem;
}
</style>