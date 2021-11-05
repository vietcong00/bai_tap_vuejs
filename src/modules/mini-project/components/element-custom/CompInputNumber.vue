<template lang="">
    <el-input-number
        class="comp-input-number"
        v-model="num"
        :min="1"
        :max="10"
        controls-position="right"
        @change="handleChange"
    />
</template>
<script lang="ts">
import { quantity } from '@/modules/example/contants';
import { Options, Vue } from 'vue-class-component';

@Options({
    name: 'comp-input-number',
    props: {
        quantity: Number,
    },
})
export default class CompInputNumber extends Vue {
    quantity!: number;
    num = quantity;
}
</script>
<style lang="scss">
// margin: 0 auto;
.el-input-number {
    width: 70px !important;
    span {
        width: 15px;
    }
    .el-input {
        .el-input__inner {
            padding-right: 30px !important;
        }
    }
}
</style>
