<template>
    <div class="narbar-header">
        <!-- logo -->
        <svg
            width="34"
            height="41"
            viewBox="0 0 34 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M17.0332 0.945312L0.296997 10.8636V23.0707L17.0332 32.989L30.4589 25.3596V28.9836L17.0332 36.9945L0.296997 26.8855V31.2724L17.0332 41L33.7694 31.2724V19.0653L20.3436 26.8855V23.0707L33.7694 15.0598V10.8636L17.0332 0.945312Z"
                fill="#0156FF"
            />
        </svg>
        <ul class="navbar-list">
            <li
                class="navbar-element"
                v-for="(caption, index) in listItemNavbar"
                :key="index"
                @click="tabActive = caption"
                :class="tabActive === caption ? 'active' : ''"
            >
                <div>{{ caption }}</div>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import IconComponent from '../CompIcon.vue';
import { ITEM_NAVBAR_LIST } from '../../contants';

import { productStore } from '../../store';

@Options({
    name: 'navbar-header',
    components: {
        IconComponent,
    },
})
export default class Header extends Vue {
    listItemNavbar = ITEM_NAVBAR_LIST;
    tabActive = this.listItemNavbar[0];

    searchBtnActice = false;
    inputSearch = '';

    get getNumberCart() {
        return productStore.getCartInfo.size;
    }

    searchProduct() {
        productStore.changeInputSearch(this.inputSearch);
    }
}
</script>

<style lang="scss" scoped>
.narbar-header {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    font-size: 14px;
    font-weight: bold;
    .navbar-list {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin: 0px;
        list-style-type: none;
        .navbar-element {
            margin: 0px 0px 0px 20px;
            cursor: pointer;
        }
        .active {
            padding: 8px 26px;
            border: 2px solid #0156ff;
            border-radius: 50px;
            color: #0156ff;
        }
    }
}
</style>
