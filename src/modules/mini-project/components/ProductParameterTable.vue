<template lang="">
    <div>
        <div class="product-parameter-table">
            <el-table :data="parameter" style="width: 100%" show-header="false">
                <el-table-column prop="option" width="120px" />
                <el-table-column prop="value" width="120px" />
            </el-table>
        </div>
    </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
    props: {
        parameter: Array,
    },
})
export default class ProductParameterTable extends Vue {}
</script>
<style lang="scss">
.product-parameter-table {
    width: fit-content;
    border: 1px solid rgb(212, 239, 255);
    .el-table {
        thead {
            tr {
                display: none;
            }
        }
        tr:nth-child(2n) {
            background-color: #f5f7ff;
        }

        tr:nth-child(2n + 1) {
            background-color: #fff;
        }
    }
}
</style>
