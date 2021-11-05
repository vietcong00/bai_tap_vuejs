<template lang="">
    <div class="select-color">
        <ul class="color-list">
            <li
                class="color-element"
                v-for="(item, index) in listColor"
                :key="index"
                @click="selectColor(item)"
                :class="colorSelectedProp && item === colorSelected ? 'active' : ''"
            >
                <div class="item-color" :style="{ backgroundColor: item }"></div>
            </li>
        </ul>
    </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
    name: 'comp-select-color',
    props: {
        listColor: Array,
        colorSelectedProp: String,
    },
})
export default class SelectColor extends Vue {
    colorSelectedProp!: string;
    colorSelected = this.colorSelectedProp;

    selectColor(color: string) {
        if (this.colorSelected === color) {
            this.colorSelected = '';
        } else {
            this.colorSelected = color;
        }
        this.$emit('selectColor', color);
    }
}
</script>
<style lang="scss" scoped>
.color-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0;
    list-style-type: none;
    .color-element {
        width: 31px;
        height: 31px;
        margin-right: 3px;
        padding: 2px;
        border-radius: 50%;
        cursor: pointer;
        .item-color {
            height: 23px;
            width: 23px;
            border-radius: 11.5px;
        }
    }
    .active {
        border: 2px solid #0156ff;
    }
}
</style>
