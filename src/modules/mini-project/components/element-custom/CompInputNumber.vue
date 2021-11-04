<template lang="">
    <div class="comp-input-number">
        <el-input-number
            v-model="num"
            :min="1"
            :max="10"
            controls-position="right"
            @change="handleChange"
        />
    </div>
</template>
<script lang="ts">
import { quantity } from '@/modules/example/contants';
import { Options, Vue } from 'vue-class-component';

@Options({
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
.comp-input-number {
    margin: 0 auto;
    .el-input-number {
        width: 70px;
        span {
            width: 15px;
        }
        .el-input {
            .el-input__inner {
                padding-right: 30px;
            }
        }
    }
}
</style>
