<template lang="">
    <div class="select-text">
        <ul class="text-list">
            <li
                class="text-element"
                v-for="(item, index) in listText"
                :key="index"
                @click="selectText(item)"
                v-show="item.number > 0"
                :class="textSelectedProp && item.name === textSelected ? 'active' : ''"
            >
                <p class="text-element__info">{{ item.name }}</p>
                <p class="text-element__info">{{ item.number }}</p>
            </li>
        </ul>
    </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { ITextItem } from '../types';

@Options({
    name: 'comp-select-text',
    props: {
        listText: Array,
        textSelectedProp: String,
    },
})
export default class SelectColor extends Vue {
    textSelectedProp!: string;
    textSelected = this.textSelectedProp;

    selectText(textItem: ITextItem) {
        if (this.textSelected === textItem.name) {
            this.textSelected = '';
        } else {
            this.textSelected = textItem.name;
        }
        this.$emit('selectText', textItem);
    }
}
</script>
<style lang="scss" scoped>
.text-list {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 0;
    list-style-type: none;
    .text-element {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        padding: 0 10px;
        font-size: 13px;
        cursor: pointer;
        .text-element__info {
            margin: 5px 0;
        }
    }
    .active {
        border: 2px solid #000000;
        border-radius: 10px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
}
</style>
