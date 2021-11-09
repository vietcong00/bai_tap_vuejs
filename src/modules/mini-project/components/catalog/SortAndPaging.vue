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
import { PAGINATION_OPTIONS, SORT_OPTIONS, PAGE_SIZE_DEFAULT } from '../../contants';
import { productStore } from '../../store';
import CompDropdown from '../element-custom/CompDropdown.vue';
import { SortType } from '../../types';

@Options({
    name: 'sort-and-paging',

    components: {
        CompDropdown,
    },
})
export default class SortAndPaging extends Vue {
    productList = this.getProductListStore;
    sortOptions = SORT_OPTIONS;
    paginationOptions = PAGINATION_OPTIONS;

    sortType = '';

    pageSize = PAGE_SIZE_DEFAULT;
    pageNumber = 1;
    numberProductInPageStart = 1;
    numberProductInPageEnd = 1;
    numberProductTotal = this.productList.length;
    typeDescEsc = 1;

    get getProductListStore() {
        return productStore.getProductList;
    }

    get getPaginationOptionsName() {
        const nameList: Array<string> = [];
        this.paginationOptions.forEach((element) => {
            nameList.push(element.name);
        });
        return nameList;
    }

    get getNumberTotalProduct() {
        return this.productList.length;
    }

    pagingProduct(pageSize: number | string) {
        if (typeof pageSize === 'number') {
            this.pageSize = pageSize;
        } else {
            const value = this.paginationOptions.find((element) => {
                return element.name === pageSize;
            })?.value;
            if (value) {
                this.pageSize = value;
            }
        }
        this.changePage(this.pageNumber);
    }

    changePage(e: number) {
        this.pageNumber = e;
        this.numberProductInPageStart = (this.pageNumber - 1) * this.pageSize + 1;
        this.numberProductInPageStart =
            this.numberProductInPageStart > this.productList.length
                ? this.productList.length
                : this.numberProductInPageStart;
        this.numberProductInPageEnd = this.numberProductInPageStart + this.pageSize - 1;
        this.numberProductInPageEnd =
            this.numberProductInPageEnd > this.productList.length
                ? this.productList.length
                : this.numberProductInPageEnd;
        const start = (this.pageNumber - 1) * this.pageSize;
        this.$emit('changePage', this.productList.slice(start, start + this.pageSize));
    }

    sortingProduct(sortType: SortType) {
        this.typeDescEsc = -this.typeDescEsc;
        this.productList.sort((a, b) => {
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
            console.log(sortType);

            if (sortA < sortB) {
                return this.typeDescEsc;
            }
            if (sortA > sortB) {
                return -this.typeDescEsc;
            }
            // names must be equal
            return 0;
        });
        this.$emit('sort', this.productList);
        this.changePage(this.pageNumber);
    }
}
</script>

<style lang="scss">
.image-banner {
    width: -webkit-fill-available;
    margin: 0 0 19px 0;
}
.name-seris-product {
    box-sizing: content-box;
    padding-left: 0;
    margin: 19px 0 30px 0;
    font-size: 32px;
}

.el-aside {
    padding: 0 16px 0 16px;
    background-color: #f5f7ff;
    .filter-column {
        display: flex;
        flex-direction: column;
        justify-content: center;
        .filter-btn {
            width: 100%;
            margin-bottom: 10px;
            border: 1px solid #a2a6b0;
            border-radius: 20px;
            color: #a2a6b0;
            font-size: 14px;
            font-weight: 600;
            padding: 10px 0;
            background-color: #f5f7ff;
            box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        }
        .filter-btn-active {
            background-color: #0156ff;
            color: #fff;
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        }

        .el-collapse-item__header {
            font-weight: bold;
            background-color: #f5f7ff;
        }
        .el-collapse-item__content {
            background-color: #f5f7ff;
        }
    }
}
.el-header {
    height: auto !important;
    .header-optiops-filter {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        .number-product-display {
            color: #b3b3b3;
        }
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
    }
    .filter-product-tags {
        display: flex;
        flex-wrap: wrap;
        margin-top: 5px;
        .filter-tag-btn {
            cursor: pointer;
        }
        .clear-filter-tag-btn {
            padding: 10px 17px;
            border: 2px solid rgb(228 228 228);
            box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        }
    }
    .search-results-keyword {
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 25px;
        .search-keyword {
            color: rgb(255, 0, 0);
            font-weight: 600;
        }
    }
}
// el-footer
.pagination-product-filter {
    display: flex;
    justify-content: center;
    margin: 20px;
}
</style>
