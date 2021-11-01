<template>
    <div class="bg-mini-project">
        <div>{{ test }}</div>
        <div class="content-mini-project">
            <header-comp :listItemNavbar="listItemNavbar" />

            <router-view />
        </div>
    </div>
</template>

<script lang="ts">
import HeaderComp from '../components/Header.vue';
import Catalog from '../components/Catalog.vue';
import { Options, Vue } from 'vue-class-component';
import InformationProduct from '../components/InformationProduct.vue';
import ShoppingCart from '../components/ShoppingCart.vue';

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
