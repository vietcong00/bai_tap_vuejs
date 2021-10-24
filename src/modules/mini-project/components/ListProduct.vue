<template>
    <div class="list-product-filter">
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
                    <button class="clear-filter-btn">Clear Filter</button>
                    <!-- ----------------Filter Options--------------- -->
                    <div class="option-filter-collapse">
                        <el-collapse v-model="activeNames" @change="handleChange">
                            <el-collapse-item title="Category" name="Category">
                                <!-- list item category filter -->
                                <div class="list-item-filter list-item-category-filter">
                                    <ul>
                                        <li
                                            v-for="(
                                                item, index
                                            ) in listItemCategoryFilter"
                                            :key="index"
                                        >
                                            <p>{{ item.name }}</p>
                                            <p>{{ item.number }}</p>
                                        </li>
                                    </ul>
                                </div>
                            </el-collapse-item>
                            <el-collapse-item title="Price" name="Price">
                                <div class="list-item-filter list-item-price-filter">
                                    <!-- list item category filter -->
                                    <ul>
                                        <li
                                            v-for="(item, index) in listItemPriceFilter"
                                            :key="index"
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
                    <button class="apply-filter-btn">Apply Filters (2)</button>
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
                                <svg
                                    height="32px"
                                    width="32px"
                                    fill="#000000"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                    version="1.1"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 96 96"
                                    enable-background="new 0 0 96 96"
                                    xml:space="preserve"
                                >
                                    <rect x="6" y="6" width="20" height="20"></rect>
                                    <rect x="38" y="6" width="20" height="20"></rect>
                                    <rect x="70" y="6" width="20" height="20"></rect>
                                    <rect x="6" y="38" width="20" height="20"></rect>
                                    <rect x="38" y="38" width="20" height="20"></rect>
                                    <rect x="70" y="38" width="20" height="20"></rect>
                                    <rect x="6" y="70" width="20" height="20"></rect>
                                    <rect x="38" y="70" width="20" height="20"></rect>
                                    <rect x="70" y="70" width="20" height="20"></rect>
                                </svg>
                            </div>
                            <div class="type-show-icon">
                                <svg
                                    width="32"
                                    height="32"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <!-- tag filter product -->
                    <div class="filter-product-tags">
                        <filter-product-tag
                            v-for="(item, index) in filterTags"
                            :key="index"
                            :name="item.name"
                            :number="item.number"
                        />
                        <div class="clear-filter-tag-btn" v-show="filterTags.length != 0">
                            <b>Clear All</b>
                        </div>
                    </div>
                </el-header>
                <el-main>
                    <card-product-filter
                        v-for="(item, index) in listProductFilter"
                        :key="index"
                        :imgLink="item.imgLink"
                        :rate="item.rate"
                        :reviews="item.reviews"
                        :producer="item.producer"
                        :description="item.description"
                        :oldPrice="item.oldPrice"
                        :newPrice="item.newPrice"
                        :statusStock="item.statusStock"
                    />
                </el-main>
                <el-footer>Footer</el-footer>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import ElementDropdownCt from '../elements/ElementDropdown.vue';
import FilterProductTag from '../elements/FilterProductTag.vue';
import CardProductFilter from '../components/CardProductFilter.vue';
export default {
    name: 'list-product-filter',
    components: {
        ElementDropdownCt,
        FilterProductTag,
        CardProductFilter,
    },

    data() {
        return {
            listItemCategoryFilter: [
                { name: 'CUSTOM PCS', number: 15 },
                { name: 'MSI ALL-IN-ONE PCS', number: 45 },
                { name: 'HP/COMPAQ PCS', number: 1 },
            ],
            listItemPriceFilter: [
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
                    maxPrice: 7000,
                },
            ],
            listItemColorFilter: ['green', 'black', 'red', 'blue'],
            links: [],
            state1: '',
            state2: '',
            sortType: 'Positon',
            sortOptions: ['Position', 'Price', 'Name', 'Rate'],
            showOptions: ['5 per page', '10 per page', '20 per page', '35 per page'],
            filterTags: [
                { name: 'CUSTOM PCS', number: 24 },
                { name: 'HP/COMPAQ PCS', number: 24 },
            ],
            listProductFilter: [
                {
                    imgLink: require('../../../assets/images/mini-project/product1.png'),
                    rate: 3.5,
                    reviews: 4,
                    producer: 'SKU D5515AI',
                    description:
                        'MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop',
                    oldPrice: '$499.00',
                    newPrice: '$499.00',
                    statusStock: 'in stock',
                },
                {
                    imgLink: require('../../../assets/images/mini-project/product2.png'),
                    rate: 4.2,
                    reviews: 5,
                    producer: 'SKU D5515AI',
                    description:
                        'MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop',
                    oldPrice: '$499.00',
                    newPrice: '$499.00',
                    statusStock: 'in stock',
                },
                {
                    imgLink: require('../../../assets/images/mini-project/product3.png'),
                    rate: 2.3,
                    reviews: 7,
                    producer: 'SKU D5515AI',
                    description:
                        'MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop',
                    oldPrice: '$499.00',
                    newPrice: '$499.00',
                    statusStock: 'in stock',
                },
                {
                    imgLink: require('../../../assets/images/mini-project/product4.png'),
                    rate: 1.2,
                    reviews: 8,
                    producer: 'SKU D5515AI',
                    description:
                        'MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop',
                    oldPrice: '$499.00',
                    newPrice: '$499.00',
                    statusStock: 'out stock',
                },
            ],
        };
    },

    methods: {
        querySearch(queryString, cb) {
            var links = this.links;
            var results = queryString
                ? links.filter(this.createFilter(queryString))
                : links;
            // call callback function to return suggestions
            cb(results);
        },
        createFilter(queryString) {
            return (link) => {
                return link.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0;
            };
        },
        loadAll() {
            return [
                { value: 'vue', link: 'https://github.com/vuejs/vue' },
                { value: 'element', link: 'https://github.com/ElemeFE/element' },
                { value: 'cooking', link: 'https://github.com/ElemeFE/cooking' },
                { value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui' },
                { value: 'vuex', link: 'https://github.com/vuejs/vuex' },
                { value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },
                { value: 'babel', link: 'https://github.com/babel/babel' },
            ];
        },
        handleSelect(item) {
            console.log(item);
        },
    },
    mounted() {
        this.links = this.loadAll();
    },
};
</script>

<style>
* {
    box-sizing: border-box;
}

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

.list-product-filter .el-aside {
    background-color: #f5f7ff;
    padding: 0 16px 0 16px;
}

.filter-column {
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.clear-filter-btn {
    width: 100%;
    border-radius: 20px;
    border: 1px solid rgb(172, 172, 172);
    margin-bottom: 10px;
}

.filter-column .el-collapse-item .el-collapse-item__header {
    background-color: #f5f7ff;
    font-weight: bold;
}
.filter-column .el-collapse-item .el-collapse-item__content {
    background-color: #f5f7ff;
}

.list-item-filter ul {
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    padding: 0;
}

.list-item-filter ul li {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    font-size: 13px;
}
.list-item-color-filter ul {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
}
.list-item-color-filter ul li {
    width: 31px;
    height: 31px;
    border-radius: 15.5px;
    border: 2px solid #0156ff;
    margin-right: 3px;
    padding: 2px;
}

.list-item-color-filter ul li .item-color {
    width: 23px;
    height: 23px;
    border-radius: 11.5px;
}

.apply-filter-btn {
    width: 100%;
    border-radius: 20px;
    background-color: #0156ff;
    color: #fff;
    padding: 8px 42px;
    margin-bottom: 10px;
}

.list-product-filter .el-header {
    height: auto !important;
}

.number-product-display {
    color: #b3b3b3;
}
.header-optiops-filter {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
}

.sort-show-options {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
}

.element-dropdown-custome {
    margin-right: 11px;
}
.type-show-icon {
    margin-left: 9px;
}
.filter-product-tags {
    display: flex;
    flex-wrap: wrap;
    margin-top: 5px;
}
.clear-filter-tag-btn {
    border: 1px solid rgb(172, 172, 172);
    padding: 10px 17px;
}
</style>
