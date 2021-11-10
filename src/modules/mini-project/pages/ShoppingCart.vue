<template>
    <div class="shoppng-cart">
        <div class="cart__header">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
                <el-breadcrumb-item>Login</el-breadcrumb-item>
            </el-breadcrumb>
            <div class="cart__header__title">Shopping Cart</div>
        </div>
        <div class="cart__content">
            <cart-product-table />
            <cart-summary-checkout />
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { formatCurrency } from '../util';
import CartProductTable from '../components/shopping-cart/CartProductTable.vue';
import CartSummaryCheckout from '../components/shopping-cart/CartSummaryCheckout.vue';

@Options({
    name: 'shopping-cart',
    components: {
        CartProductTable,
        CartSummaryCheckout,
    },
    methods: {
        formatCurrency,
    },
})
export default class CardProductCart extends Vue {}
</script>

<style lang="scss" scoped>
.cart__header__title {
    font-weight: 600;
    font-size: 24px;
    line-height: 48px;
}

.cart__content {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
}
</style>
