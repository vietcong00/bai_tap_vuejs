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
                            :listText="geFilterOptions.categoryFilters"
                            @selectText="chosenCategory"
                            :textSelectedProp="getFilterChosenList.category.name"
                        />
                    </el-collapse-item>
                    <el-collapse-item title="Price" name="Price">
                        <comp-select-text
                            :listText="geFilterOptions.priceFilters"
                            @selectText="chosenPrice"
                            :textSelectedProp="getFilterChosenList.price.name"
                        />
                    </el-collapse-item>
                    <el-collapse-item title="Color" name="Color">
                        <!-- list item color filter -->
                        <comp-select-color
                            :listColor="listColorFilter"
                            @selectColor="chosenColor"
                            :colorSelectedProp="getFilterChosenList.color.name"
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
    TEXT_ITEM_DEFAULT,
    FILTER_CHOSEN_LIST_DEFAULT,
    FILTER_CHOSEN_PRICE_DEFAULT,
    COLLAPSE_ACTIVES,
} from '../../contants';
import { ITextItem, IFilterChosenList } from '../../types';
import CompIcon from '../CompIcon.vue';
import CompSelectColor from './CompSelectColor.vue';
import CompSelectText from './CompSelectText.vue';

@Options({
    name: 'filter-chosen-aside',
    components: {
        CompIcon,
        CompSelectColor,
        CompSelectText,
    },
})
export default class FilterChosenAside extends Vue {
    filterChosenList: IFilterChosenList = { ...FILTER_CHOSEN_LIST_DEFAULT };
    collapseActives = COLLAPSE_ACTIVES;
    listColorFilter: Array<string> = [];
    numberFilter = 0;

    get getProductListStore() {
        return productStore.getProductList;
    }

    get getProductListFilter() {
        return productStore.getProductListFilter;
    }

    get geFilterOptions() {
        productStore.geFilterOptions.colorFilters.forEach((color) => {
            this.listColorFilter.push(color.name);
        });
        return productStore.geFilterOptions;
    }

    get getFilterChosenList() {
        this.filterChosenList = productStore.getFilterChosenList;
        this.numberFilter = 0;
        for (const key in this.filterChosenList) {
            if (this.filterChosenList[key].name) {
                this.numberFilter++;
            }
        }
        return this.filterChosenList;
    }

    // Click chosen category
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

    // Click chosen Price
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

    // Click chosen color
    chosenColor(color: string) {
        let colorFilter = this.filterChosenList.color;
        let item: ITextItem = TEXT_ITEM_DEFAULT;
        for (const itemColor of this.geFilterOptions.colorFilters) {
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

    // Create filte tagname list in header of content
    createFilterTagList() {
        const filterTagNameList: Array<ITextItem> = [];
        for (const key in this.filterChosenList) {
            if (this.filterChosenList[key].name) {
                filterTagNameList.push({
                    name: this.filterChosenList[key].name,
                    number: this.filterChosenList[key].number,
                });
            }
        }
        productStore.updateFilterTagNameList(filterTagNameList);
    }

    filter() {
        this.createFilterTagList();
        productStore.filter();
    }

    clearFilterChosenList(): void {
        this.filterChosenList = { ...FILTER_CHOSEN_LIST_DEFAULT };
        this.numberFilter = 0;
        productStore.updateFilterChosenList(this.filterChosenList);
    }
}
</script>

<style lang="scss" scoped>
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
    }
}
</style>
