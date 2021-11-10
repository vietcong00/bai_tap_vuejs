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
            <filter-chosen-aside />
            <el-container>
                <el-header>
                    <!-- options show product -->
                    <div class="header-optiops-filter">
                        <!-- The product order number is displayed -->
                        <div class="number-product-display">
                            Items {{ getInfoPaging.start }}-{{ getInfoPaging.end }} of
                            {{ getProductListFilter.length }}
                        </div>

                        <div class="sort-paging-show">
                            <sort-and-paging />
                            <div
                                class="type-show-icon"
                                @click="showType = 'grid'"
                                :class="showType === 'grid' ? 'type-show__active' : ''"
                            >
                                <comp-icon :iconName="'grid-icon'" />
                            </div>
                            <div
                                class="type-show-icon"
                                @click="showType = 'list'"
                                :class="showType === 'list' ? 'type-show__active' : ''"
                            >
                                <comp-icon :iconName="'list-icon'" />
                            </div>
                        </div>
                    </div>

                    <!-- tag filter product -->
                    <filter-tag-list />
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
                    <div class="product-list-grid" v-show="showType === 'list'">
                        <product-card-catalog
                            v-for="(item, index) in getProductListPaging"
                            :key="index"
                            :product="item"
                            v-show="showType === 'list'"
                        />
                    </div>

                    <div class="product-list-grid" v-show="showType === 'grid'">
                        <product-card-catalog-grid
                            v-for="(item, index) in getProductListPaging"
                            :key="index"
                            :product="item"
                        />
                    </div>
                    <!-- pagnition -->
                    <div class="pagination-product-filter">
                        <el-pagination
                            background
                            layout="prev, pager, next"
                            :total="getProductListFilter.length"
                            :page-size="getPageSize"
                            :current-page="getInfoPaging.currentPage"
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
import { PAGINATION_OPTIONS, CURRENT_PAGE_DEFAULT } from '../contants';
import ProductCardCatalog from '../components/ProductCardCatalog.vue';
import ProductCardCatalogGrid from '../components/ProductCardCatalogGrid.vue';
import CompIcon from '../components/CompIcon.vue';
import SortAndPaging from '../components/catalog/SortAndPaging.vue';
import FilterChosenAside from '../components/catalog/FilterChosenAside.vue';
import FilterTagList from '../components/catalog/FilterTagList.vue';

@Options({
    name: 'catalog',
    components: {
        ProductCardCatalog,
        CompIcon,
        SortAndPaging,
        FilterChosenAside,
        FilterTagList,
        ProductCardCatalogGrid,
    },
})
export default class Catalog extends Vue {
    paginationOptions = PAGINATION_OPTIONS;
    showType = 'grid';
    get getPageSize() {
        return productStore.getPageSize;
    }

    get getInfoPaging() {
        return productStore.getInfoPaging;
    }

    get getProductListFilter() {
        return productStore.getProductListFilter;
    }

    get getProductListPaging() {
        return productStore.getProductListPaging;
    }

    // Search by name product after push Enter button
    get getInputSearch() {
        return productStore.getInputSearch;
    }

    changePage(currentPage: number) {
        productStore.changePage(currentPage);
    }

    mounted() {
        productStore.changePage(CURRENT_PAGE_DEFAULT);
    }
}
</script>

<style lang="scss" scoped>
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
        .sort-paging-show {
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
            .type-show__active {
                padding: 8px;
                background-color: rgb(240, 240, 240);
                border: 1px solid #000;
                border-radius: 50%;
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

.product-list-grid {
    display: flex;
    flex-wrap: wrap;
    padding: 0px;
}

// el-footer
.pagination-product-filter {
    display: flex;
    justify-content: center;
    margin: 20px;
}
</style>
