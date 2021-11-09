// Header: tab Coctact + navbar + options(search + cart + account )
<template>
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
                    <el-badge :value="getNumberCart" class="item" type="primary">
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
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { productStore } from '../../store';
import CompIcon from '../CompIcon.vue';

@Options({
    name: 'option-header',
    props: {
        listItemNavbar: {
            type: Array,
        },
    },
    components: {
        CompIcon,
    },
})
export default class OptionHeader extends Vue {
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
