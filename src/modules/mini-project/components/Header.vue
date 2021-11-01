// Header: navbar + options(search + cart + account )
<template>
    <div class="header-comp">
        <!-- navbar -->
        <div class="navbar-header">
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
            <ul>
                <li v-for="(caption, index) in listItemNavbar" :key="index">
                    <div>{{ caption }}</div>
                </li>
            </ul>
        </div>
        <!-- options -->
        <div class="options-header">
            <!-- search option -->
            <div class="icon-option-header search-option-header">
                <icon-component :iconName="'search-icon'" />
            </div>
            <!-- cart option -->
            <router-link :to="{ name: 'shopping-cart' }">
                <div class="icon-option-header cart-option-header">
                    <el-badge :value="2" class="item" type="primary">
                        <icon-component :iconName="'cart-header-icon'" />
                    </el-badge>
                </div>
            </router-link>
            <!-- account -->
            <div class="icon-option-header account-option-header">
                <img src="../../../assets/images/mini-project/avatar.png" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import IconComponent from '../elements/IconComponent.vue';

@Options({
    props: {
        listItemNavbar: {
            type: Array,
        },
    },
    components: {
        IconComponent,
    },
})
export default class Header extends Vue {}
</script>

<style lang="scss" scoped>
.header-comp {
    margin: 0;
    padding: 0 10px 20px 10px;
    border-bottom: 1px solid #e5e5e5;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .navbar-header {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        font-weight: bold;
        font-size: 14px;
        ul {
            list-style-type: none;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            margin: 0 0 0 -30px;
            li {
                margin: 0px 0px 0px 25px;
            }
        }
    }
    .options-header {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        .icon-option-header {
            margin: 0 0 0 15px;
        }
    }
}
</style>
