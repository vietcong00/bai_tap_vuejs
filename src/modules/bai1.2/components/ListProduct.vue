<template>
    <div class="list-product">
        <ul>
            <li v-for="(product, index) in listProduct" :key="index">
                <product
                    :imgLink="product.imgLink"
                    :description="product.description"
                    :price="product.price"
                    :sale="product.sale"
                    :additional="product.additional"
                    :ratingStar="product.ratingStar"
                />
            </li>
        </ul>
    </div>
</template>

<script>
import Product from './Product.vue';
export default {
    name: 'list-product',
    components: {
        Product,
    },
    props: {
        listProduct: {
            type: Array,
        },
    },
};
</script>

<style>
.list-product ul {
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    padding: 0px;
}

.list-product ul li {
    padding: 5px;
    border: 2px solid #fff;
    width: 25%;
    border-radius: 16px;
    background: #fff;
    text-align: left;
    width: 100%;
}

.product {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 10px;
    padding: 10px;
}

@media (min-width: 500px) {
    .list-product ul li {
        width: 50% !important;
    }
}

@media (min-width: 768px) {
    .list-product ul li {
        width: 33.333% !important;
    }
}

@media (min-width: 950px) {
    .list-product ul li {
        width: 25% !important;
    }
}
</style>
