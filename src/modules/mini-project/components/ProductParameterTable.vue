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
    name: 'product-parameter-table',
    props: {
        parameter: Array,
    },
})
export default class ProductParameterTable extends Vue {}
</script>
<style lang="scss"></style>
