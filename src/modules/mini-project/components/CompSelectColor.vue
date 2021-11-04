<template lang="">
    <div class="select-color">
        <ul>
            <li
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
.select-color {
    ul {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        list-style-type: none;
        padding: 0;
        li {
            cursor: pointer;
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
</style>
