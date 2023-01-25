<script></script>
<template>
    <div class="cs-btn next">
        <img src="../../../public/img/next.png" alt="button next">
    </div>
    <div class="cs-btn prev">
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