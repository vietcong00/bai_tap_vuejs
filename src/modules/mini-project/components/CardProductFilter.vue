<template>
    <div class="card-product-filter">
        <el-row :gutter="53">
            <el-col :span="6">
                <div
                    class="grid-content bg-purple"
                    style="background-color: #fff !important; margin-left: 53px"
                >
                    <img :src="imgLink" />
                    <div class="rate-reviews">
                        <el-rate v-model="value" disabled />
                        <p style="color: #a2a6b0">Reviews ({{ reviews }})</p>
                    </div>
                </div>
            </el-col>
            <el-col :span="14"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'card-product-filter',

    props: {
        imgLink: {
            type: String,
        },
        rate: {
            type: Number,
        },
        reviews: {
            type: Number,
        },
        producer: {
            type: String,
        },
        description: {
            type: String,
        },
        oldPrice: {
            type: String,
        },
        newPrice: {
            type: String,
        },
        statusStock: {
            type: String,
        },
    },
    data() {
        return {
            value: this.rate,
        };
    },
};
</script>

<style>
.card-product-filter {
    margin-bottom: 15px;
}
.card-product-filter .el-rate__icon {
    margin-right: 2px;
    font-size: 13px;
}
.card-product-filter .rate-reviews {
    display: flex;
    width: max-content;
}
</style>
