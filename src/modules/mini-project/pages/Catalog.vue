<template>
    <div class="catalog">
        <!-- banner -->
        <img class="image-banner" src="../../../assets/images/mini-project/banner.png" />
        <!-- breadcrumb -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
            <el-breadcrumb-item>Laptops </el-breadcrumb-item>
            <el-breadcrumb-item>Everyday Use Notebooks</el-breadcrumb-item>
            <el-breadcrumb-item>MSI Prestige Series</el-breadcrumb-item>
            <el-breadcrumb-item>MSI WS Series</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="name-seris-product">MSI PS Series (20)</div>

        <!-- content : filter Column+ listProduct Column-->
        <el-container>
            <!-- filter Column -->
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
            <!-- filtered product list paginated and sorted -->
            <el-container>
                <el-header>
                    <!-- options show product -->
                    <div class="header-optiops-filter">
                        <!-- The product order number is displayed -->
                        <div class="number-product-display">
                            Items {{ numberProductInPageStart }}-{{
                                numberProductInPageEnd
                            }}
                            of {{ getNumberTotalProduct }}
                        </div>
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
                        <sort-and-paging :productList="productList" />
                    </div>
                    <!-- tag filter product -->
                    <div
                        class="filter-product-tags"
                        v-show="filterTagNameList.length > 0"
                    >
                        <filter-tag
                            v-for="(item, index) in filterTagNameList"
                            :key="index"
                            :filterChosen="item"
                            @filter-delete-tag="handleDeleteFilterTag(item.name, index)"
                            class="filter-tag-btn"
                        >
                            {{ item }} - {{ index }}
                        </filter-tag>
                        <div
                            class="filter-tag-btn clear-filter-tag-btn"
                            @click="clearFilterTagList"
                        >
                            <b>Clear All</b>
                        </div>
                    </div>
                    <!-- Search results for keyword -->
                    <div class="search-results-keyword" v-show="getInputSearch">
                        <div>Search results for keyword :</div>
                        <div class="search-keyword">
                            {{ getInputSearch }}
                        </div>
                    </div>
                </el-header>
                <el-main>
                    <!-- list product catalog -->
                    <product-card-catalog
                        v-for="(item, index) in productListPaging"
                        :key="index"
                        :product="item"
                    ></product-card-catalog>
                    <!-- pagnition -->
                    <div class="pagination-product-filter">
                        <el-pagination
                            background
                            layout="prev, pager, next"
                            :total="productList.length"
                            :page-size="pageSize"
                            @current-change="changePage"
                        >
                        </el-pagination>
                    </div>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { productStore } from '../store';
import {
    FILTER_PRICE_OPTION,
    PAGINATION_OPTIONS,
    SORT_OPTIONS,
    TEXT_ITEM_DEFAULT,
    FILTER_CHOSEN_LIST_DEFAULT,
    FILTER_CHOSEN_PRICE_DEFAULT,
    PAGE_SIZE_DEFAULT,
} from '../contants';
import { ITextItem, IFilterChosenList, SortType } from '../types';
import CompDropdown from '../components/element-custom/CompDropdown.vue';
import FilterTag from '../components/catalog/FilterTag.vue';
import ProductCardCatalog from '../components/ProductCardCatalog.vue';
import CompIcon from '../components/CompIcon.vue';
import CompSelectColor from '../components/CompSelectColor.vue';
import CompSelectText from '../components/CompSelectText.vue';
import SortAndPaging from '../components/catalog/SortAndPaging.vue';

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

    filterTagNameList: Array<ITextItem> = [];
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
        this.pagingProduct(this.pageSize);
        return textSearch;
    }

    get getFilterTagNameList() {
        return this.filterTagNameList;
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
    }

    clearFilterTagList(): void {
        this.filterTagNameList = [];
        this.productList = this.getProductListStore;
        this.clearFilterChosenList();
        this.pagingProduct(this.pageSize);
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
        this.pagingProduct(this.pageSize);
    }

    clearFilterChosenList(): void {
        this.filterChosenList = { ...FILTER_CHOSEN_LIST_DEFAULT };
        this.numberFilter = 0;
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
        this.pagingProduct(this.pageSize);
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
        this.productListPaging = this.productList.slice(start, start + this.pageSize);
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
