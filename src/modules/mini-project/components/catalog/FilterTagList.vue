<template>
    <div class="filter-product-tags" v-show="getFilterTagNameList.length > 0">
        <filter-tag
            v-for="(item, index) in getFilterTagNameList"
            :key="index"
            :filterChosen="item"
            @filter-delete-tag="handleDeleteFilterTag(item.name, index)"
            class="filter-tag-btn"
        >
            {{ item }} - {{ index }}
        </filter-tag>
        <div class="filter-tag-btn clear-filter-tag-btn" @click="clearFilterTagList">
            <b>Clear All</b>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { productStore } from '../../store';
import { FILTER_CHOSEN_LIST_DEFAULT } from '../../contants';
import FilterTag from '../catalog/FilterTag.vue';

@Options({
    name: 'fiter-tag-list',
    components: {
        FilterTag,
    },
})
export default class FilterTagList extends Vue {
    isFilterBtnActive = false;

    get getFilterTagNameList() {
        return productStore.getFilterTagNameList;
    }

    clearFilterTagList(): void {
        productStore.updateFilterTagNameList([]);
        productStore.updateFilterChosenList(FILTER_CHOSEN_LIST_DEFAULT);
        productStore.updateProductListFilter(productStore.getProductList);
    }

    handleDeleteFilterTag(tagName: string, index: number): void {
        productStore.deleteFilterTagName({ tagName: tagName, index: index });
    }
}
</script>

<style lang="scss" scoped>
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
</style>
