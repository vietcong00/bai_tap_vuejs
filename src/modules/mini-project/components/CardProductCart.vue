<template>
    <div class="cart-product-cart"></div>
</template>

<script>
export default {
    name: 'card-product-cart',
    props: {
        imgLink: {
            type: String,
        },
        name: {
            type: String,
        },
        Price: {
            type: String,
        },
        subtotal: {
            type: String,
        },
    },
};
</script>

<style></style>
