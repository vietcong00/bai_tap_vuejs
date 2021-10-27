<template>
    <div class="information-product">
        <el-row>
            <el-col :span="12"
                ><div class="grid-content bg-purple information-product-tab">
                    <el-tabs v-model="activeName" @tab-click="handleClick">
                        <el-tab-pane label="About Product" name="about-product"
                            >About Product</el-tab-pane
                        >
                        <el-tab-pane label="Details" name="details">Details</el-tab-pane>
                        <el-tab-pane label="Specs" name="Specs">Specs</el-tab-pane>
                    </el-tabs>
                </div></el-col
            >
            <el-col :span="12">
                <div class="grid-content bg-purple-light price-cart-product">
                    <div class="price-information-product">
                        On Sale from <b>$3,299.00</b>
                    </div>
                    <div class="add-cart-cart">
                        <el-input-number
                            v-model="num"
                            :min="1"
                            :max="10"
                            controls-position="right"
                            @change="handleChange"
                        />
                    </div>
                    <button class="add-cart-btn">Add to Cart</button>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'information-product',
    data() {
        return {
            tabActive: 'about-product',
            num: 0,
        };
    },
};
</script>

<style lang="scss" scoped>
.price-cart-product {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    .add-cart-btn {
        border-radius: 50%;
    }
}
</style>
