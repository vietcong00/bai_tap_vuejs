<template lang="">
    <div class="comp-rate">
        <el-rate v-model="rate" disabled />
        <p style="color: #a2a6b0; margin: -4px 0 0 8px">Reviews ({{ reviews }})</p>
    </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
    name: 'comp-rate',
    props: {
        rate: Number,
        reviews: Number,
    },
})
export default class CompRate extends Vue {}
</script>
<style lang="scss">
.comp-rate {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    .el-rate {
        .el-rate__item {
            .el-rate__icon {
                margin-right: 2px;
                font-size: 13px;
            }
        }
    }
}
</style>
