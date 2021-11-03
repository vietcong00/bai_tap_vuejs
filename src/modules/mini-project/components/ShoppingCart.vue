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
                                    {{ formatPriceUS(scope.row.newPrice) }}
                                </div>
                            </template>
                        </el-table-column>
                        <el-table-column label="Qty" width="100">
                            <template #default="scope">
                                <el-input-number
                                    v-model="scope.row.quantity"
                                    :min="1"
                                    :max="10"
                                    controls-position="right"
                                    @change="handleChange"
                                />
                            </template>
                        </el-table-column>
                        <el-table-column prop="subtotal" label="Subtotal" width="120">
                            <template #default="scope">
                                <div class="product__table__money">
                                    {{ formatPriceUS(scope.row.subtotal) }}
                                </div>
                            </template>
                        </el-table-column>
                        <el-table-column width="50" prop="id">
                            <template #default="scope">
                                <div class="product__table__money">
                                    <icon-component
                                        :iconName="'delete-icon'"
                                        @click="deleteProductCart(scope.row.id)"
                                    />
                                    <icon-component :iconName="'edit-icon'" />
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
            <div class="cart__content__summary-product">
                <div class="summary__titlle">Summary</div>
                <!-- ----------------Filter Options--------------- -->
                <div class="summary__option">
                    <el-collapse v-model="activeNames" @change="handleChange">
                        <el-collapse-item name="shipping-tax">
                            <template #title>
                                <div>
                                    Estimate Shipping and Tax
                                    <div class="shipping-tax__description">
                                        Enter your destination to get a shipping estimate.
                                    </div>
                                </div>
                            </template>

                            <div class="shipping-country">
                                <div class="summary__tittle-element">Country</div>
                                <div class="input-element">
                                    <el-select
                                        v-model="valueCountry"
                                        placeholder="Select"
                                    >
                                        <el-option
                                            v-for="item in listCountry"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value"
                                        >
                                        </el-option>
                                    </el-select>
                                </div>
                            </div>
                            <div class="shipping-tax__state">
                                <div class="summary__tittle-element">State/Province</div>
                                <div class="input-element">
                                    <el-input v-model="valueState" />
                                </div>
                            </div>
                            <div class="shipping-tax__zip">
                                <div class="summary__tittle-element">Zip/Postal Code</div>
                                <div class="input-element">
                                    <el-input v-model="valueZip" />
                                </div>
                            </div>
                            <div class="shipping-tax__standard-rate">
                                <div class="summary__tittle-element">Standard Rate</div>
                                <el-radio
                                    v-model="radioShipMethod"
                                    label="Price may vary depending on the item/destination. Shop Staff will contact you. $21.00"
                                ></el-radio>
                            </div>
                            <div class="shipping-tax__store">
                                <div class="summary__tittle-element">
                                    Pickup from store
                                </div>
                                <el-radio
                                    v-model="radioShipMethod"
                                    label="1234 Street Adress City Address, 1234 $0.00"
                                ></el-radio>
                            </div>
                        </el-collapse-item>
                        <el-collapse-item
                            title="Apply Discount Code"
                            name="discount-code"
                        >
                            <div class="discount-code__enter-code">
                                <div class="summary__tittle-element">
                                    Enter discount code
                                </div>
                                <div class="input-element">
                                    <el-input
                                        v-model="valueDiscountCode"
                                        placeholder="Enter Discount code"
                                    />
                                </div>
                                <button class="discount-code__apply">
                                    Apply Discount
                                </button>
                            </div>
                        </el-collapse-item>
                    </el-collapse>
                </div>
                <div class="summary__detail-order">
                    <div class="list-detail-order">
                        <div v-for="(item, index) in listDetailOrder" :key="index">
                            <div class="name-description-group">
                                <div
                                    class="
                                        summary__tittle-element
                                        list-detail-order__element__name
                                    "
                                >
                                    {{ item.name }}
                                </div>
                                <div class="list-detail-order__element__description">
                                    {{ item.description }}
                                </div>
                            </div>
                            <div
                                class="
                                    summary__tittle-element
                                    list-detail-order__element__value
                                "
                            >
                                {{ formatPriceUS(item.value) }}
                            </div>
                        </div>
                    </div>
                    <button class="checkout-btn">Proceed to Checkout</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import IconComponent from '../elements/IconComponent.vue';
import { productStore } from './../store';

@Options({
    components: {
        IconComponent,
    },
})
export default class CardProductCart extends Vue {
    listProduct: any[] = [];
    CartInfo: any[] = [];

    listDetailOrder = [
        {
            name: 'Subtotal',
            description: '',
            value: 13047,
        },
        {
            name: 'Shipping',
            description:
                '(Standard Rate - Price may vary depending on the item/destination. TECS Staff will contact you.)',
            value: 21,
        },
        {
            name: 'Tax',
            description: '',
            value: 1.91,
        },
        {
            name: 'GST (10%)',
            description: '',
            value: 1.91,
        },
        {
            name: 'Order Total',
            description: '',
            value: 13068,
        },
    ];

    listCountry = [
        {
            value: 'Viet Nam',
            label: 'Viet Nam',
        },
        {
            value: 'USA',
            label: 'USA',
        },
        {
            value: 'Japan',
            label: 'Japan',
        },
        {
            value: 'Korea',
            label: 'Korea',
        },
        {
            value: 'China',
            label: 'China',
        },
    ];

    valueCountry = '';
    valueState = '';
    valueZip = '';
    radioShipMethod = '';
    valueDiscountCode = '';

    formatPriceUS(price: number) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(price);
    }

    clearShoppingCart() {
        this.listProduct = [];
        productStore.clearShoppingCart();
    }

    deleteProductCart(id: string) {
        this.listProduct.splice(this.listProduct.indexOf(id));
        productStore.deleteProductCart(id);
    }

    mounted() {
        productStore.getCartInfo.forEach((id) => {
            this.listProduct.push(productStore.getProductList.find((el) => el.id === id));
        });
    }
}
</script>

<style lang="scss">
.shoppng-cart {
    .cart__header {
        .cart__header__title {
            font-weight: 600;
            font-size: 24px;
            line-height: 48px;
        }
    }
    .cart__content {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        .cart__content__product-option-group {
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            .product-table {
                .el-table {
                    tr:nth-child(2n) {
                        background-color: #f5f7ff;
                    }

                    tr:nth-child(2n + 1) {
                        background-color: #fff;
                    }
                    .el-table__row {
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
                        .product__table__name {
                            font-weight: 400;
                            font-size: 14px;
                            margin: 10px 0;
                        }
                        .product__table__money {
                            font-weight: 600;
                            font-size: 16px;
                        }
                    }
                }
            }
            .option-btn-group {
                display: flex;
                flex-wrap: wrap;
                flex-direction: row;
                justify-content: space-between;
                margin-top: 25px;
                button {
                    border-radius: 20px;
                    padding: 8px 30px;
                    font-size: 14px;
                    font-weight: 600;
                    color: #a2a6b0;
                    border: 2px solid #a2a6b0;
                    background-color: #fff;
                }
                .is-active {
                    background-color: #000;
                    color: #fff;
                    border: 2px solid #000;
                }
                .continue-clear-group {
                    .option-btn-group__continue-btn {
                        margin-right: 7px;
                    }
                }
            }
        }
        .cart__content__summary-product {
            width: 34%;
            padding: 30px;
            margin: 0 20px;
            background-color: #f5f7ff;
            .summary__tittle-element {
                font-weight: 600;
                font-size: 13px;
                line-height: 27.3px;
            }
            .summary__titlle {
                font-weight: 600;
                font-size: 24px;
                line-height: 36px;
            }
            .summary__option {
                margin-bottom: 30px;
                .el-collapse {
                    border: none !important;
                    .el-collapse-item {
                        .el-collapse-item__header {
                            font-weight: 400;
                            font-size: 18px;
                            background-color: #f5f7ff;
                            line-height: 27px;
                            display: flex;
                            flex-wrap: wrap;
                            align-items: flex-start;
                            height: auto;
                            border: none !important;

                            .shipping-tax__description {
                                font-weight: 400;
                                font-size: 14px;
                                color: #666666;
                                line-height: 21px;
                                width: 70%;
                                margin: 12px 0;
                            }
                            i {
                                margin-top: 4px;
                            }
                        }
                        .el-collapse-item__wrap {
                            background-color: #f5f7ff;
                            border: none !important;
                            .el-collapse-item__content {
                                background-color: #f5f7ff;
                                .el-radio {
                                    display: flex;
                                    white-space: break-spaces;
                                }

                                .input-element {
                                    .el-select,
                                    .elinput {
                                        width: 100%;
                                    }
                                }
                                .discount-code__apply {
                                    width: 100%;
                                    border-radius: 30px;
                                    color: #0156ff;
                                    font-weight: 600;
                                    font-size: 14px;
                                    border: 1px solid #0156ff;
                                    background-color: #f5f7ff;
                                    padding: 10px 0;
                                    margin: 20px 0;
                                }
                            }
                        }
                    }
                }
            }
            .summary__detail-order {
                border-top: 1px solid #cacdd8;
                padding-top: 10px;
                .list-detail-order div {
                    display: flex;
                    flex-wrap: wrap;
                    flex-direction: row;
                    justify-content: space-between;
                    .name-description-group {
                        display: flex;
                        flex-wrap: wrap;
                        flex-direction: column;
                        width: 70%;
                    }
                    .list-detail-order__element__description {
                        font-weight: 400;
                        font-size: 10px;
                        color: #a2a6b0;
                    }
                }
                .checkout-btn {
                    width: 100%;
                    border-radius: 30px;
                    color: #fff;
                    font-weight: 600;
                    font-size: 14px;
                    background-color: #0156ff;
                    padding: 10px 0;
                    margin: 20px 0;
                }
            }
        }
    }
}
</style>
