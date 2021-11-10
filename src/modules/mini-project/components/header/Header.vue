// Header: tab Coctact + navbar + options(search + cart + account )
<template>
    <div class="header-comp">
        <general-infomation />
        <div class="navbar-option">
            <div class="navbar-option__content">
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

                <!-- options -->
                <div class="options-header">
                    <!-- search option -->
                    <div class="icon-option-header search-option-header">
                        <el-input
                            v-model="inputSearch"
                            placeholder="Type something"
                            v-show="searchBtnActice"
                            @keydown.enter="searchProduct"
                        >
                            <template #prefix>
                                <comp-icon
                                    :iconName="'chevron-right-icon'"
                                    @click="searchBtnActice = !searchBtnActice"
                                />
                            </template>
                        </el-input>
                        <comp-icon
                            class="icon-hover"
                            :iconName="'search-icon'"
                            v-show="!searchBtnActice"
                            @click="searchBtnActice = !searchBtnActice"
                        />
                    </div>
                    <!-- cart option -->
                    <div class="icon-option-header">
                        <router-link :to="{ name: 'shopping-cart' }">
                            <div class="icon-hover cart-option-header">
                                <el-badge
                                    :value="getNumberCart"
                                    class="item"
                                    type="primary"
                                >
                                    <comp-icon :iconName="'cart-header-icon'" />
                                </el-badge>
                            </div>
                        </router-link>
                    </div>

                    <!-- account -->
                    <div class="icon-option-header icon-hover account-option-header">
                        <img src="../../../../assets/images/mini-project/avatar.png" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { productStore } from '../../store';
import CompIcon from '../CompIcon.vue';
import GeneralInfomation from '../header/GeneralInfomation.vue';
import { ITEM_NAVBAR_LIST } from '../../contants';

@Options({
    name: 'header',
    components: {
        CompIcon,
        GeneralInfomation,
    },
})
export default class Header extends Vue {
    searchBtnActice = false;
    listItemNavbar = ITEM_NAVBAR_LIST;
    tabActive = this.listItemNavbar[0];
    inputSearch = '';

    get getNumberCart() {
        return productStore.getCartInfo.size;
    }

    searchProduct() {
        productStore.searchProduct(this.inputSearch);
    }
}
</script>

<style lang="scss" scoped>
.header-comp {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 0 20px 0;
    padding: 0 10px 20px 10px;
    border-bottom: 1px solid #e5e5e5;

    .navbar-option {
        padding-top: 20px;
        width: 100%;
        .navbar-option__content {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
            width: 97%;
            max-width: 1350px !important;
            margin: 0 auto;
        }
    }
}

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

.options-header {
    display: flex;
    align-items: center;
    .icon-option-header {
        margin-left: 15px;
    }
    .icon-hover {
        padding: 5px;
        &:hover {
            background-color: rgb(214, 214, 214);
            border-radius: 50%;
            cursor: pointer;
        }
    }
    .search-option-header {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
}
</style>
