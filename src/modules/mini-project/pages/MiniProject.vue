<template>
    <div class="mini-project">
        <div class="mini-project__header">
            <header-comp :listItemNavbar="listItemNavbar" />
        </div>
        <div class="mini-project__content">
            <router-view />
        </div>
    </div>
</template>

<script lang="ts">
import HeaderComp from '../components/Header.vue';
import Catalog from './Catalog.vue';
import { Options, Vue } from 'vue-class-component';
import InformationProduct from './InformationProduct.vue';
import ShoppingCart from './ShoppingCart.vue';

@Options({
    name: 'mini-project',
    components: {
        HeaderComp,
        Catalog,
        InformationProduct,
        ShoppingCart,
    },
})
export default class HomeProject extends Vue {
    listItemNavbar = [
        'Laptops',
        'Desktop PCs',
        'Networking Devices',
        'Printers & Scanners',
        'PC Parts',
        'All Other Products',
        'Repairs',
        'Our Deals',
    ];
}
</script>

<style lang="scss" scoped>
* {
    box-sizing: border-box;
}
.mini-project__content {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    align-content: center;
    margin: 0;
    background-color: #fff;
    margin: 0 auto;
    max-width: 1400px;
    padding: 0 20px;
}
</style>
