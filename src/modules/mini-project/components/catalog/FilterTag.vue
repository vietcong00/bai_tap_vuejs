<template>
    <div class="filter-product-tag">
        <div class="name-product-tag">
            <b>{{ filterChosen.name }}</b>
        </div>
        <div class="number-product-tag">({{ filterChosen.number }})</div>
        <div class="delete-tag" @click="deleteTagFilter">
            <svg
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clip-rule="evenodd"
                    fill="#C94D3F"
                />
            </svg>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { PropType } from 'vue';
import { ITextItem } from '../../types';

@Options({
    name: 'filter-tag',
    props: {
        filterChosen: Object as PropType<ITextItem>,
    },
})
export default class Catalog extends Vue {
    deleteTagFilter() {
        this.$emit('filter-delete-tag');
    }
}
</script>

<style lang="scss" scope>
.filter-product-tag {
    display: flex;
    flex-wrap: wrap;
    margin-right: 6px;
    padding: 10px 17px;
    width: fit-content;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border: 2px solid rgb(228 228 228);
    .number-product-tag {
        margin-left: 5px;
        color: rgb(192, 192, 192);
    }
    .delete-tag {
        margin-left: 5px;
    }
}
</style>
