<template>
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
                            <el-select v-model="valueCountry" placeholder="Select">
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
                        <div class="summary__tittle-element">Pickup from store</div>
                        <el-radio
                            v-model="radioShipMethod"
                            label="1234 Street Adress City Address, 1234 $0.00"
                        ></el-radio>
                    </div>
                </el-collapse-item>
                <el-collapse-item title="Apply Discount Code" name="discount-code">
                    <div class="discount-code__enter-code">
                        <div class="summary__tittle-element">Enter discount code</div>
                        <div class="input-element">
                            <el-input
                                v-model="valueDiscountCode"
                                placeholder="Enter Discount code"
                            />
                        </div>
                        <button class="discount-code__apply">Apply Discount</button>
                    </div>
                </el-collapse-item>
            </el-collapse>
        </div>
        <div class="summary__detail-order">
            <div
                class="list-detail-order"
                v-for="(item, index) in listDetailOrder"
                :key="index"
            >
                <div class="name-description-group">
                    <div class="summary__tittle-element list-detail-order__element__name">
                        {{ item.name }}
                    </div>
                    <div class="list-detail-order__element__description">
                        {{ item.description }}
                    </div>
                </div>
                <div class="summary__tittle-element list-detail-order__element__value">
                    {{ formatCurrency(item.value) }}
                </div>
            </div>
            <button class="checkout-btn">Proceed to Checkout</button>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { formatCurrency } from '../../util';
import { LIST_COUNTRY } from '../../contants';

@Options({
    name: 'cart-summary-checkout',
    methods: {
        formatCurrency,
    },
})
export default class CartSummaryCheckout extends Vue {
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

    listCountry = LIST_COUNTRY;

    valueCountry = '';
    valueState = '';
    valueZip = '';
    radioShipMethod = '';
    valueDiscountCode = '';
}
</script>

<style lang="scss" scoped>
.cart__content__summary-product {
    width: 34%;
    margin: 0 20px;
    padding: 30px;
    background-color: #f5f7ff;
    .summary__tittle-element {
        font-size: 13px;
        font-weight: 600;
        line-height: 27.3px;
    }
    .summary__titlle {
        font-size: 24px;
        font-weight: 600;
        line-height: 36px;
    }
    .summary__option {
        margin-bottom: 30px;
        .shipping-tax__description {
            width: 70%;
            margin: 12px 0;
            color: #666666;
            font-size: 14px;
            font-weight: 400;
            line-height: 21px;
        }

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
            margin: 20px 0;
            padding: 10px 0;
            color: #0156ff;
            font-size: 14px;
            font-weight: 600;
            border-radius: 30px;
            border: 1px solid #0156ff;
            background-color: #f5f7ff;
        }
    }
    .summary__detail-order {
        padding-top: 10px;
        border-top: 1px solid #cacdd8;
        .list-detail-order {
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
                color: #a2a6b0;
                font-size: 10px;
                font-weight: 400;
            }
        }

        .checkout-btn {
            width: 100%;
            margin: 20px 0;
            padding: 10px 0;
            color: #fff;
            font-size: 14px;
            font-weight: 600;
            background-color: #0156ff;
            border-radius: 30px;
        }
    }
}
</style>
