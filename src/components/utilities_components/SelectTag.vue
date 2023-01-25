<script>
export default {
    name: 'SelectTag',
    data() {
        return {
            option: '',
        }
    },
    props: { type: Array },
    emits: ['change-option']
}
</script>
<template>
    <select v-model="option" @change="$emit('change-option', option)" name="type" id="type">
        <option v-for="item in type" :value="item">{{ item }}</option>
    </select>
</template>
<style>

</style>