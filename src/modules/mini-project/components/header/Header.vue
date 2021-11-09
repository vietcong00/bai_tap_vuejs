// Header: tab Coctact + navbar + options(search + cart + account )
<template>
    <div class="header-comp">
        <general-infomation />
        <div class="navbar-option">
            <div class="navbar-option__content">
                <navbar-header />
                <option-header />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { productStore } from '../../store';
import IconComponent from '../CompIcon.vue';
import GeneralInfomation from '../header/GeneralInfomation.vue';
import OptionHeader from '../header/OptionHeader.vue';
import NavbarHeader from '../header/NavbarHeader.vue';

@Options({
    name: 'header',
    props: {
        listItemNavbar: {
            type: Array,
        },
    },
    components: {
        IconComponent,
        GeneralInfomation,
        OptionHeader,
        NavbarHeader,
    },
})
export default class Header extends Vue {
    tabActive = 'Laptops';

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
</style>
