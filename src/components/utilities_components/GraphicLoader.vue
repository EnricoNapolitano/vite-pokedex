<script></script>
<template>
    <!-- loader component -->
    <div class="loader">
        <h2><i class="fa-solid fa-spinner fa-spin"></i> LOADING...</h2>
    </div>
</template>
<style lang="scss" scoped>
@use '../../assets/scss/partials/variables' as *;

.loader {
    color: $light-grey;
    text-align: center;

    h2 {
        margin-top: 15rem;
        font-weight: 900;
        font-size: 10rem;
    }
}
</style>