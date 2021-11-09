<template>
    <div class="cart__content__product-option-group">
        <div class="product-table">
            <el-table :data="listProduct">
                <el-table-column label="Item" width="120">
                    <template #default="scope">
                        <img :src="scope.row.imgLink" style="width: 100%" />
                    </template>
                </el-table-column>
                <el-table-column prop="name" width="270" class="test">
                    <template #default="scope">
                        <div class="product__table__name">
                            {{ scope.row.name }}
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="price" label="Price" width="120">
                    <template #default="scope">
                        <div class="product__table__money">
                            {{ formatCurrency(scope.row.newPrice) }}
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="Qty" width="100">
                    <template #default="scope">
                        <comp-input-number :quantity="scope.row.quantity" />
                    </template>
                </el-table-column>
                <el-table-column prop="subtotal" label="Subtotal" width="120">
                    <template #default="scope">
                        <div class="product__table__money">
                            {{ formatCurrency(scope.row.subtotal) }}
                        </div>
                    </template>
                </el-table-column>
                <el-table-column width="50" prop="id">
                    <template #default="scope">
                        <div class="product__table__money">
                            <comp-icon
                                :iconName="'delete-icon'"
                                @click="deleteProductCart(scope.row.id)"
                            />
                            <comp-icon :iconName="'edit-icon'" />
                        </div>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="option-btn-group">
            <div class="continue-clear-group">
                <router-link :to="{ name: 'catalog' }">
                    <button class="option-btn-group__continue-btn">
                        Continue Shopping
                    </button>
                </router-link>
                <button
                    class="option-btn-group__clear-btn is-active"
                    @click="clearShoppingCart"
                >
                    Clear Shopping Cart
                </button>
            </div>
            <button class="option-btn-group__update-btn is-active">
                Update Shopping Cart
            </button>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { productStore } from '../../store';
import { IProduct } from '../../types';
import { formatCurrency } from '../../util';
import CompInputNumber from '../../components/element-custom/CompInputNumber.vue';
import CompIcon from '../CompIcon.vue';

@Options({
    name: 'cart-product-table',
    components: {
        CompInputNumber,
        CompIcon,
    },
    methods: {
        formatCurrency,
    },
})
export default class CartProductTable extends Vue {
    listProduct: Array<IProduct> = [];

    clearShoppingCart() {
        this.listProduct = [];
        productStore.clearCart();
    }

    deleteProductCart(id: string) {
        this.listProduct.splice(this.listProduct.indexOf(productStore.getProductList[0]));
        productStore.deleteCart(id);
    }

    mounted() {
        productStore.getCartInfo.forEach((id) => {
            const product = productStore.getProductList.find((el) => el.id === id);
            if (product) {
                this.listProduct.push(product);
            }
        });
    }
}
</script>

<style lang="scss" scoped>
.cart__content__product-option-group {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;

    .option-btn-group {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 25px;
        button {
            padding: 8px 30px;
            color: #a2a6b0;
            font-size: 14px;
            font-weight: 600;
            background-color: #fff;
            border: 2px solid #a2a6b0;
            border-radius: 20px;
        }
        .is-active {
            color: #fff;
            background-color: #000;
            border: 2px solid #000;
        }
        .option-btn-group__continue-btn {
            margin-right: 7px;
        }
    }
}
</style>
