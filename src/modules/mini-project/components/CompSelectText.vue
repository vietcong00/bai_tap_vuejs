<template lang="">
    <div class="select-text">
        <ul>
            <li
                v-for="(item, index) in listText"
                :key="index"
                @click="selectText(item)"
                v-show="item.number > 0"
                :class="textSelectedProp && item.name === textSelected ? 'active' : ''"
            >
                <p>{{ item.name }}</p>
                <p>{{ item.number }}</p>
            </li>
        </ul>
    </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { ITextItem } from '../types';

@Options({
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
.select-text {
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
        .active {
            border: 2px solid #000000;
            border-radius: 10px;
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        }
    }
}
</style>
