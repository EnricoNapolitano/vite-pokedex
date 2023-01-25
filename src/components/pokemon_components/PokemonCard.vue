<script>
export default {
    name: 'PokemonCard',
    props: {
        name: String,
        type: String,
        img: String,
        weight: Number,
        color: String
    }
}
</script>
<template>
    <!-- Single pokemon card -->
    <li class="col">
        <div class="cs-card  mb-5">
            <figure>
                <figure>
                    <img :src="img" :alt="name">
                </figure>
            </figure>
            <address :class="type.toLowerCase()" class="text-center">
                <h4>{{ name }}</h4>
                <h5><span>TYPE:</span> {{ type }}</h5>
                <h5><span>WEIGHT:</span> {{ weight }} kg</h5>
            </address>
        </div>
    </li>
</template>
<style lang="scss" scoped>
figure {
    min-height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.cs-card {
    background-color: white;
    border: 2px solid rgba(189, 189, 189, 0.305);
    border-radius: 20px;
}

address {
    padding: 20px 0;
    margin-bottom: 0;
    border-radius: 0 0 20px 20px;
}

h4 {
    font-weight: 800;
}

span {
    font-weight: 600;
}
</style>