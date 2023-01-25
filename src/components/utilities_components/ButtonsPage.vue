<script>
export default {
    name: "ButtonsPage",
    emits: ['button-clicked']
}
</script>
<template>
    <div class="cs-btn next" @click="$emit('button-clicked', 1)">
        <img src="../../../public/img/next.png" alt="button next">
    </div>
    <div class="cs-btn prev" @click="$emit('button-clicked', -1)">
        <img src="../../../public/img/prev.png" alt="button previous">
    </div>
</template>
<style scoped>
.cs-btn {
    text-align: center;
    position: absolute;
    cursor: pointer;
}

.prev {
    top: 365px;
    left: 0;
    transform: translateX(-90%);
}

.next {
    top: 365px;
    right: 0;
    transform: translateX(90%);
}
</style>