<template>
    <div class="bg-mini-project">
        <div class="content-mini-project">
            <header-comp :listItemNavbar="listItemNavbar" />
            <catalog :listProduct="listProduct" /> -->
            <information-product />
            <shopping-cart></shopping-cart>
        </div>
    </div>
</template>

<script>
import HeaderComp from '../components/Header.vue';
import Catalog from '../components/Catalog.vue';
import InformationProduct from '../components/InformationProduct.vue';
import ShoppingCart from '../components/ShoppingCart.vue';

export default {
    name: 'App',
    components: {
        // HelloWorld,
        HeaderComp,
        Catalog,
        InformationProduct,
        ShoppingCart,
        // Recommended,
        // FooterComp,
    },
    data() {
        return {
            listItemNavbar: [
                'Laptops',
                'Desktop PCs',
                'Networking Devices',
                'Printers & Scanners',
                'PC Parts',
                'All Other Products',
                'Repairs',
                'Our Deals',
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
.bg-mini-project {
    background-color: #9e9e9e;
    .content-mini-project {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        align-content: center;
        margin: 0;
        padding: 20px;
        background-color: #fff;
        margin: 0 auto;
    }
}

// .input-name-filter .el-autocomplete {
//     width: -webkit-fill-available;
// }
</style>
