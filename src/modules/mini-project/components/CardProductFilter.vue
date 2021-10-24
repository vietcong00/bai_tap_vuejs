<template>
    <div class="card-product-filter"></div>
</template>

<script>
export default {
    name: 'card-product-filter',
    props: {
        imgLink: {
            type: String,
        },
        rate: {
            type: Number,
        },
        producer: {
            type: String,
        },
        description: {
            type: String,
        },
        oldPrice: {
            type: String,
        },
        newPrice: {
            type: String,
        },
        statusStock: {
            type: String,
        },
    },
};
</script>

<style></style>
