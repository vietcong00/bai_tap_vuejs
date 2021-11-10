<template>
    <div class="sort-paging-options">
        <!-- sort product option -->
        <comp-dropdown
            :nameElement="'Sort By:'"
            :options="sortOptions"
            @selectText="sortingProduct"
        />
        <!-- number of products displayed on 1 page -->
        <comp-dropdown
            :nameElement="'Show:'"
            :options="getPaginationOptionsName"
            @selectText="pagingProduct"
        />
        <div class="type-show-icon">
            <comp-icon :iconName="'grid-icon'" />
        </div>
        <div class="type-show-icon">
            <comp-icon :iconName="'list-icon'" />
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { PAGINATION_OPTIONS, SORT_OPTIONS, CURRENT_PAGE_DEFAULT } from '../../contants';
import { productStore } from '../../store';
import CompDropdown from './CompDropdown.vue';
import { SortType } from '../../types';

@Options({
    name: 'sort-and-paging',

    components: {
        CompDropdown,
    },
})
export default class SortAndPaging extends Vue {
    sortOptions = SORT_OPTIONS;
    paginationOptions = PAGINATION_OPTIONS;

    sortType = this.sortOptions[0];
    typeDescEsc = 1;

    get getProductListFilter() {
        return productStore.getProductListFilter;
    }

    // Get list name of pagination Option
    get getPaginationOptionsName() {
        const nameList: Array<string> = [];
        this.paginationOptions.forEach((element) => {
            nameList.push(element.name);
        });
        return nameList;
    }

    // Pagination list product
    pagingProduct(data: number | string) {
        let pageSize = 0;
        if (typeof data === 'number') {
            pageSize = data;
        } else {
            const value = this.paginationOptions.find((element) => {
                return element.name === data;
            })?.value;
            if (value) {
                pageSize = value;
            }
        }
        productStore.updatePageSize(pageSize);
    }

    // Sort product by Type
    sortingProduct(sortType: SortType) {
        this.typeDescEsc = -this.typeDescEsc;
        const productList = this.getProductListFilter;
        productList.sort((a, b) => {
            switch (sortType) {
                case 'Name':
                    sortType = 'name';
                    break;
                case 'Rate':
                    sortType = 'rate';
                    break;
                case 'Price':
                    sortType = 'newPrice';
                    break;
            }
            const sortA = a[sortType]; // ignore upper and lowercase
            const sortB = b[sortType]; // ignore upper and lowercase
            if (sortA < sortB) {
                return this.typeDescEsc;
            }
            if (sortA > sortB) {
                return -this.typeDescEsc;
            }
            return 0;
        });
        productStore.updateProductListFilter(productList);
        productStore.changePage(CURRENT_PAGE_DEFAULT);
    }

    mounted() {
        this.sortingProduct('Price');
    }
}
</script>

<style lang="scss" scoped>
.sort-paging-options {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    .component-dropdown {
        margin-right: 11px;
    }
    .type-show-icon {
        margin-left: 9px;
    }
}
</style>
