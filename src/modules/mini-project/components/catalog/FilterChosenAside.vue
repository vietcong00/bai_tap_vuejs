<template>
    <el-aside width="18%">
        <div class="filter-column">
            <b style="margin: 10px auto; font-size: 16px">Filters</b>
            <button
                class="filter-btn clear-filter-btn"
                :class="numberFilter > 0 ? 'filter-btn-active' : ''"
                @click="clearFilterChosenList"
            >
                Clear Filter
            </button>
            <!-- ----------------Filter Options--------------- -->
            <div class="option-filter-collapse">
                <el-collapse v-model="collapseActives" @change="handleChange">
                    <el-collapse-item title="Category" name="Category">
                        <!-- list item category filter -->
                        <comp-select-text
                            :listText="listItemCategoryFilter"
                            @selectText="chosenCategory"
                            :textSelectedProp="filterChosenList.category.name"
                        />
                    </el-collapse-item>
                    <el-collapse-item title="Price" name="Price">
                        <comp-select-text
                            :listText="listItemPriceFilter"
                            @selectText="chosenPrice"
                            :textSelectedProp="filterChosenList.price.name"
                        />
                    </el-collapse-item>
                    <el-collapse-item title="Color" name="Color">
                        <!-- list item color filter -->
                        <comp-select-color
                            :listColor="setColorFilter"
                            @selectColor="chosenColor"
                            :colorSelectedProp="filterChosenList.color.name"
                        />
                    </el-collapse-item>
                    <el-collapse-item title="Filter Name" name="Filter Name">
                    </el-collapse-item>
                </el-collapse>
            </div>
            <!-- ------------------------------- -->
            <!-- Apply Filter Button -->
            <button
                class="filter-btn apply-filter-btn"
                :class="numberFilter > 0 ? 'filter-btn-active' : ''"
                @click="filter"
            >
                Apply Filters ({{ numberFilter }})
            </button>
        </div>
    </el-aside>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { productStore } from '../../store';
import {
    FILTER_PRICE_OPTION,
    PAGINATION_OPTIONS,
    SORT_OPTIONS,
    TEXT_ITEM_DEFAULT,
    FILTER_CHOSEN_LIST_DEFAULT,
    FILTER_CHOSEN_PRICE_DEFAULT,
    PAGE_SIZE_DEFAULT,
} from '../../contants';
import { ITextItem, IFilterChosenList } from '../../types';
import CompDropdown from '../element-custom/CompDropdown.vue';
import FilterTag from '../catalog/FilterTag.vue';
import ProductCardCatalog from '../ProductCardCatalog.vue';
import CompIcon from '../CompIcon.vue';
import CompSelectColor from '../CompSelectColor.vue';
import CompSelectText from '../CompSelectText.vue';
import SortAndPaging from '../catalog/SortAndPaging.vue';

@Options({
    name: 'catalog',
    components: {
        CompDropdown,
        FilterTag,
        ProductCardCatalog,
        CompIcon,
        CompSelectColor,
        CompSelectText,
        SortAndPaging,
    },
})
export default class Catalog extends Vue {
    listItemPriceFilter = FILTER_PRICE_OPTION;
    sortOptions = SORT_OPTIONS;
    paginationOptions = PAGINATION_OPTIONS;
    filterChosenList: IFilterChosenList = { ...FILTER_CHOSEN_LIST_DEFAULT };

    collapseActives = ['Category', 'Price', 'Color', 'Filter Name'];
    sortType = 'Positon';
    isFilterBtnActive = false;
    productList = this.getProductListStore;
    productListPaging = this.getProductListStore;
    filterTagNameList = this.getFilterTagNameList;

    listItemCategoryFilter: Array<ITextItem> = [];
    ListItemColorFilter: Array<ITextItem> = [];
    setColorFilter = new Set();
    numberFilter = 0;
    pageSize = PAGE_SIZE_DEFAULT;
    pageNumber = 1;
    numberProductInPageStart = 1;
    numberProductInPageEnd = 1;
    numberProductTotal = this.productList.length;
    typeDescEsc = 1;

    get getProductListStore() {
        return productStore.getProductList;
    }

    get getFilterTagNameList() {
        return productStore.getFilterTagNameList;
    }

    get getInputSearch() {
        const textSearch = productStore.getInputSearch;
        if (textSearch) {
            this.productList = [];
            this.getProductListStore.forEach((element) => {
                if (element.name.toLowerCase().indexOf(textSearch.toLowerCase()) >= 0) {
                    this.productList.push(element);
                }
            });
        }
        return textSearch;
    }

    get getNumberTotalProduct() {
        return this.productList.length;
    }

    chosenCategory(item: ITextItem) {
        let categoryFilter = this.filterChosenList.category;
        if (!categoryFilter.name) {
            this.numberFilter++;
            categoryFilter = { ...item };
        } else if (categoryFilter.name !== item.name) {
            categoryFilter = { ...item };
        } else {
            categoryFilter = TEXT_ITEM_DEFAULT;
            this.numberFilter--;
        }
        this.filterChosenList.category = categoryFilter;
    }

    chosenPrice(item: ITextItem) {
        let price = this.filterChosenList.price;
        if (!price.name) {
            this.numberFilter++;
            price = { ...item };
        } else if (price.name !== item.name) {
            price = { ...item };
        } else {
            price = FILTER_CHOSEN_PRICE_DEFAULT;
            this.numberFilter--;
        }
        this.filterChosenList.price = price;
    }

    chosenColor(color: string) {
        let colorFilter = this.filterChosenList.color;
        let item: ITextItem = TEXT_ITEM_DEFAULT;
        for (const itemColor of this.ListItemColorFilter) {
            if (itemColor.name === color) {
                item = { ...itemColor };
                break;
            }
        }
        if (!colorFilter.name) {
            this.numberFilter++;
            colorFilter = { ...item };
        } else if (colorFilter.name !== item.name) {
            colorFilter = { ...item };
        } else {
            colorFilter = TEXT_ITEM_DEFAULT;
            this.numberFilter--;
        }
        this.filterChosenList.color = colorFilter;
    }

    createFilterTagList() {
        this.filterTagNameList = [];
        for (const key in this.filterChosenList) {
            if (this.filterChosenList[key].name) {
                this.filterTagNameList.push({
                    name: this.filterChosenList[key].name,
                    number: this.filterChosenList[key].number,
                });
            }
        }
        productStore.updateFilterTagNameList(this.filterTagNameList);
    }

    clearFilterTagList(): void {
        this.filterTagNameList = [];
        this.productList = this.getProductListStore;
        this.clearFilterChosenList();
        productStore.updateFilterTagNameList(this.filterTagNameList);
    }

    handleDeleteFilterTag(tagName: string, index: number): void {
        this.numberFilter--;
        this.filterTagNameList.splice(index);
        for (const key in this.filterChosenList) {
            if (this.filterChosenList[key].name === tagName) {
                this.filterChosenList[key].name = '';
                break;
            }
        }
        productStore.updateFilterTagNameList(this.filterTagNameList);
        this.filter();
    }

    filter() {
        this.createFilterTagList();
        this.productList = this.getProductListStore.filter((product) => {
            if (
                this.filterChosenList.category.name !== '' &&
                product.category !== this.filterChosenList.category.name
            ) {
                return false;
            }
            if (
                this.filterChosenList.color.name !== '' &&
                product.colors.indexOf(this.filterChosenList.color.name) < 0
            ) {
                return false;
            }
            if (
                this.filterChosenList.price.name !== '' &&
                (product.newPrice <= this.filterChosenList.price.minPrice ||
                    product.newPrice >= this.filterChosenList.price.maxPrice)
            ) {
                return false;
            }
            return true;
        });
        productStore.updateProductListFilter(this.productList);
    }

    clearFilterChosenList(): void {
        this.filterChosenList = { ...FILTER_CHOSEN_LIST_DEFAULT };
        this.numberFilter = 0;
        productStore.updateFilterChosenList(this.filterChosenList);
    }

    mounted() {
        // create list option filter
        this.productList.forEach((product) => {
            let found = false;
            for (const category of this.listItemCategoryFilter) {
                if (product.category === category.name) {
                    category.number++;
                    found = true;
                    break;
                }
            }
            if (!found) {
                this.listItemCategoryFilter.push({
                    name: product.category,
                    number: 1,
                });
            }

            found = false;
            product.colors.forEach((color) => {
                found = false;
                this.setColorFilter.add(color);
                for (const el of this.ListItemColorFilter) {
                    if (el.name === color) {
                        el.number++;
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    this.ListItemColorFilter.push({
                        name: color,
                        number: 1,
                    });
                }
            });

            for (const price of this.listItemPriceFilter) {
                if (product.newPrice <= price.maxPrice) {
                    price.number++;
                    break;
                }
            }
        });
    }
}
</script>

<style lang="scss">
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
</style>
