<template>
    <div class="catalog">
        <!-- banner -->
        <div class="banner-img">
            <img src="../../../assets/images/mini-project/banner.png" />
        </div>
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
                        @click="handleClearFilterName"
                    >
                        Clear Filter
                    </button>
                    <!-- ----------------Filter Options--------------- -->
                    <div class="option-filter-collapse">
                        <el-collapse v-model="activeNames" @change="handleChange">
                            <el-collapse-item title="Category" name="Category">
                                <!-- list item category filter -->
                                <div
                                    class="
                                        list-item-filter
                                        text-list-item-filter
                                        list-item-category-filter
                                    "
                                >
                                    <ul>
                                        <li
                                            v-for="(
                                                item, index
                                            ) in listItemCategoryFilter"
                                            :key="index"
                                            @click="handleChosenCategory(item.name)"
                                            :class="
                                                item.name ==
                                                filterChosenList.category.name
                                                    ? 'active'
                                                    : ''
                                            "
                                        >
                                            <p>{{ item.name }}</p>
                                            <p>{{ item.number }}</p>
                                        </li>
                                    </ul>
                                </div>
                            </el-collapse-item>
                            <el-collapse-item title="Price" name="Price">
                                <div
                                    class="
                                        list-item-filter
                                        text-list-item-filter
                                        list-item-price-filter
                                    "
                                >
                                    <!-- list item price filter -->
                                    <ul>
                                        <li
                                            v-for="(item, index) in listItemPriceFilter"
                                            :key="index"
                                            @click="handleChosenPrice(item)"
                                            :class="
                                                item.name == filterChosenList.price.name
                                                    ? 'active'
                                                    : ''
                                            "
                                        >
                                            <p>{{ item.name }}</p>
                                            <p>{{ item.number }}</p>
                                        </li>
                                    </ul>
                                </div>
                            </el-collapse-item>
                            <el-collapse-item title="Color" name="Color">
                                <!-- list item color filter -->
                                <div class="list-item-filter list-item-color-filter">
                                    <ul>
                                        <li
                                            v-for="(item, index) in listItemColorFilter"
                                            :key="index"
                                            @click="handleChosenColor(item)"
                                            :class="
                                                item == filterChosenList.color.name
                                                    ? 'active'
                                                    : ''
                                            "
                                        >
                                            <div
                                                class="item-color"
                                                :style="{ backgroundColor: item }"
                                            ></div>
                                        </li>
                                    </ul>
                                </div>
                            </el-collapse-item>
                            <el-collapse-item title="Filter Name" name="Filter Name">
                                <!-- input name filter -->
                                <div class="input-name-filter">
                                    <el-autocomplete
                                        class="inline-input"
                                        v-model="state1"
                                        :fetch-suggestions="querySearch"
                                        placeholder="Please Input"
                                        @select="handleSelect"
                                    ></el-autocomplete>
                                </div>
                            </el-collapse-item>
                        </el-collapse>
                    </div>
                    <!-- ------------------------------- -->
                    <!-- Apply Filter Button -->
                    <button
                        class="filter-btn apply-filter-btn"
                        :class="numberFilter > 0 ? 'filter-btn-active' : ''"
                        @click="handleFilter"
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
                        <div class="number-product-display">Items 1-35 of 61</div>
                        <div class="sort-show-options">
                            <!-- sort product option -->
                            <element-dropdown-ct
                                :nameElement="'Sort By:'"
                                :options="sortOptions"
                            />
                            <!-- number of products displayed on 1 page -->
                            <element-dropdown-ct
                                :nameElement="'Show:'"
                                :options="showOptions"
                            />
                            <div class="type-show-icon">
                                <icon-component :iconName="'grid-icon'" />
                            </div>
                            <div class="type-show-icon">
                                <icon-component :iconName="'list-icon'" />
                            </div>
                        </div>
                    </div>
                    <!-- tag filter product -->
                    <div
                        class="filter-product-tags"
                        v-show="filterTagNameList.length > 0"
                    >
                        <filter-product-tag
                            v-for="(item, index) in filterTagNameList"
                            :key="index"
                            :filterChosen="item"
                            @filter-delete-tag="test"
                            class="filter-tag-btn"
                        />
                        <div
                            class="filter-tag-btn clear-filter-tag-btn"
                            @click="handleClearFilter"
                        >
                            <b>Clear All</b>
                        </div>
                    </div>
                </el-header>
                <el-main>
                    <!-- list product filter -->
                    <card-product-catalog
                        v-for="(item, index) in productList"
                        :key="index"
                        :product="item"
                    ></card-product-catalog>
                </el-main>
                <el-footer>
                    <!-- pagnition -->
                    <div class="pagination-product-filter">
                        <el-pagination
                            background
                            layout="prev, pager, next"
                            :total="1000"
                        >
                        </el-pagination>
                    </div>
                </el-footer>
            </el-container>
        </el-container>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import ElementDropdownCt from '../elements/ElementDropdown.vue';
import FilterProductTag from '../elements/FilterProductTag.vue';
import CardProductCatalog from './CardProductCatalog.vue';
import IconComponent from '../elements/IconComponent.vue';
import { productStore } from '../store';
@Options({
    name: 'catalog',
    components: {
        ElementDropdownCt,
        FilterProductTag,
        CardProductCatalog,
        IconComponent,
    },
})
export default class Catalog extends Vue {
    isFilterBtnActive = false;
    filterTagNameList: string[] = [];

    get getProductListStore() {
        return productStore.getProductList;
    }

    productList = this.getProductListStore;

    listItemCategoryFilter = [
        { name: 'CUSTOM PCS', number: 15 },
        { name: 'MSI ALL-IN-ONE PCS', number: 45 },
        { name: 'HP/COMPAQ PCS', number: 1 },
    ];

    listItemPriceFilter = [
        { name: '$0.00 - $1,000.00', number: 19, minPrice: 0, maxPrice: 1000 },
        {
            name: '$1,000.00 - $2,000.00',
            number: 21,
            minPrice: 1000,
            maxPrice: 2000,
        },
        {
            name: '$2,000.00 - $3,000.00',
            number: 9,
            minPrice: 2000,
            maxPrice: 3000,
        },
        {
            name: '$3,000.00 - $4,000.00',
            number: 6,
            minPrice: 3000,
            maxPrice: 4000,
        },
        {
            name: '$4,000.00 - $5,000.00',
            number: 3,
            minPrice: 4000,
            maxPrice: 5000,
        },
        {
            name: '$5,000.00 - $6,000.00',
            number: 1,
            minPrice: 5000,
            maxPrice: 6000,
        },
        {
            name: '$6,000.00 - $7,000.00',
            number: 1,
            minPrice: 6000,
            maxPrice: 7000,
        },
        {
            name: '$7,000.00 And Above',
            number: 1,
            minPrice: 7000,
            maxPrice: 10000000,
        },
    ];

    listItemColorFilter = ['green', 'black', 'red', 'blue'];
    links = [];
    state1 = '';
    state2 = '';
    sortType = 'Positon';
    sortOptions = ['Position', 'Price', 'Name', 'Rate'];
    showOptions = ['5 per page', '10 per page', '20 per page', '35 per page'];

    numberFilter = 0;
    filterChosenList = {
        category: {
            name: '',
        },
        price: {
            name: '',
            minPrice: 0,
            maxPrice: 0,
        },
        color: {
            name: '',
        },
    };

    checkTest(item: any) {
        console.log(item !== '');
        return item !== '';
    }

    handleChosenCategory(item: string) {
        let categoryFilter = this.filterChosenList.category.name;
        if (!categoryFilter) {
            this.numberFilter++;
            categoryFilter = item;
        } else if (categoryFilter !== item) {
            categoryFilter = item;
        } else {
            categoryFilter = '';
            this.numberFilter--;
        }
        this.filterChosenList.category.name = categoryFilter;
    }

    handleChosenPrice(item: any) {
        let price = this.filterChosenList.price;

        if (!price.name) {
            this.numberFilter++;
            price = { ...item };
        } else if (price.name !== item.name) {
            price = { ...item };
        } else {
            price.name = '';
            price.minPrice = 0;
            price.maxPrice = 0;
            this.numberFilter--;
        }
        this.filterChosenList.price = price;
    }

    handleChosenColor(item: string) {
        let colorFilter = this.filterChosenList.color.name;
        if (!colorFilter) {
            this.numberFilter++;
            colorFilter = item;
        } else if (colorFilter !== item) {
            colorFilter = item;
        } else {
            colorFilter = '';
            this.numberFilter--;
        }
        this.filterChosenList.color.name = colorFilter;
    }

    handleFilter() {
        this.filterTagNameList = [];
        if (this.filterChosenList.category.name) {
            this.filterTagNameList.push(this.filterChosenList.category.name);
        }

        if (this.filterChosenList.price.name) {
            this.filterTagNameList.push(this.filterChosenList.price.name);
        }

        if (this.filterChosenList.color.name) {
            this.filterTagNameList.push(this.filterChosenList.color.name);
        }

        this.productList = this.getProductListStore.filter((product) => {
            if (
                this.filterChosenList.category.name !== '' &&
                product.category !== this.filterChosenList.category.name
            ) {
                return false;
            }
            if (
                this.filterChosenList.color.name !== '' &&
                product.color !== this.filterChosenList.color.name
            ) {
                return false;
            }
            if (
                this.filterChosenList.price.name !== '' &&
                product.newPrice! >= this.filterChosenList.price.minPrice &&
                product.newPrice! <= this.filterChosenList.price.maxPrice
            ) {
                return false;
            }
            return true;
        });
    }

    handleClearFilter(): void {
        this.filterTagNameList = [];
        this.productList = this.getProductListStore;
        this.handleClearFilterName();
    }

    handleClearFilterName(): void {
        this.filterChosenList = {
            category: {
                name: '',
            },
            price: {
                name: '',
                minPrice: 0,
                maxPrice: 0,
            },
            color: {
                name: '',
            },
        };
        this.numberFilter = 0;
    }

    test(e: any): void {
        console.log(e);
    }
}
</script>

<style lang="scss">
* {
    box-sizing: border-box;
}

.catalog {
    .banner-img img {
        width: -webkit-fill-available;
        margin: 27px 0 19px 0;
    }
    .name-seris-product {
        box-sizing: content-box;
        font-size: 32px;
        padding-left: 0;
        margin: 19px 0 30px 0;
    }

    .el-aside {
        background-color: #f5f7ff;
        padding: 0 16px 0 16px;
        .filter-column {
            display: flex;
            justify-content: center;
            flex-direction: column;
            .filter-btn {
                width: 100%;
                border-radius: 20px;
                border: 1px solid #a2a6b0;
                margin-bottom: 10px;
                color: #a2a6b0;
                font-size: 14px;
                font-weight: 600;
                padding: 10px 0;
                background-color: #f5f7ff;
                box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
            }
            .filter-btn-active {
                color: #fff;
                background-color: #0156ff;
                box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            }
            .option-filter-collapse {
                .el-collapse-item {
                    .el-collapse-item__header {
                        background-color: #f5f7ff;
                        font-weight: bold;
                    }
                    .el-collapse-item__content {
                        background-color: #f5f7ff;
                        .list-item-filter {
                            ul {
                                list-style-type: none;
                                display: flex;
                                flex-wrap: wrap;
                                flex-direction: column;
                                padding: 0;
                                li {
                                    cursor: pointer;
                                    display: flex;
                                    flex-wrap: wrap;
                                    justify-content: space-between;
                                    align-items: center;
                                    font-size: 13px;
                                    padding: 0 10px;
                                    p {
                                        margin: 5px 0;
                                    }
                                }
                            }
                        }

                        .text-list-item-filter {
                            ul {
                                .active {
                                    border: 2px solid #000000;
                                    border-radius: 10px;
                                    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
                                }
                            }
                        }
                        .list-item-color-filter {
                            ul {
                                display: flex;
                                flex-wrap: wrap;
                                flex-direction: row;
                                li {
                                    width: 31px;
                                    height: 31px;
                                    border-radius: 50%;
                                    margin-right: 3px;
                                    padding: 2px;
                                    .item-color {
                                        width: 23px;
                                        height: 23px;
                                        border-radius: 11.5px;
                                    }
                                }
                                .active {
                                    border: 2px solid #0156ff;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    .el-container {
        .el-header {
            height: auto !important;
            .header-optiops-filter {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                align-items: center;
                .number-product-display {
                    color: #b3b3b3;
                }
                .sort-show-options {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    align-items: center;
                    .element-dropdown-custome {
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
                    border: 2px solid rgb(228 228 228);
                    padding: 10px 17px;
                    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
                }
            }
        }
        .el-footer {
            .pagination-product-filter {
                margin: 33px;
                display: flex;
                justify-content: center;
                li {
                    border-radius: 18px !important;
                    background-color: #fff !important;
                    color: #a2a6b0 !important;
                    font-weight: 600 !important;
                    font-size: 13px !important;
                    border: 2px solid #a2a6b0 !important;
                    padding: 3px !important;
                    width: 36px !important;
                    height: 36px !important;
                }
                .active {
                    background-color: #f5f7ff !important;
                    border: 2px solid #f5f7ff !important;
                    color: #000 !important;
                }
            }
        }
    }
}
</style>
