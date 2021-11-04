<template>
    <div>
        <div class="card-product-catalog">
            <el-row :gutter="53">
                <el-col :span="6" style="height: auto">
                    <div class="grid-content image-rate-product-filter">
                        <router-link
                            :to="{ name: 'information', params: { id: product.id } }"
                        >
                            <img :src="product.imgLink" style="width: 100%" />
                        </router-link>
                        <comp-rate :rate="product.rate" :reviews="product.reviews" />
                    </div>
                </el-col>
                <el-col :span="14" style="height: auto">
                    <div class="grid-content information-product-filter">
                        <div class="category-product-filter">
                            {{ product.category }}
                        </div>
                        <div class="description-product-filter">
                            <div class="name-product-filter">
                                {{ product.name }}
                            </div>
                            <product-parameter-table :parameter="product.parameter" />
                        </div>
                        <div class="price-product-filter">
                            <del style="font-size: 15px">
                                {{ formatPriceUS(product.oldPrice) }}
                            </del>
                            <b style="padding-left: 7px; font-size: 18px">
                                {{ formatPriceUS(product.newPrice) }}
                            </b>
                        </div>
                        <button class="add-cart-btn" @click="addToCart(product.id)">
                            <icon-component :iconName="'cart-icon'" />
                            <b style="padding-left: 5px">Add To Cart</b>
                        </button>
                    </div>
                </el-col>
                <el-col :span="4" style="height: auto">
                    <div class="grid-content status-link-product-filter">
                        <div v-if="product.statusStock == 'in stock'">
                            <icon-component :iconName="'checked-icon'" />
                            <p
                                class="text-status-stock-product-filter"
                                style="color: #78a962"
                            >
                                in stock
                            </p>
                        </div>
                        <div v-else>
                            <icon-component :iconName="'cancel-icon'" />
                            <p
                                class="text-status-stock-product-filter"
                                style="color: #c94d3f"
                            >
                                out stock
                            </p>
                        </div>
                        <div class="link-product-filter">
                            <icon-component :iconName="'mail-icon'" />
                            <icon-component :iconName="'rank-icon'" />
                            <icon-component :iconName="'love-icon'" />
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import IconComponent from './CompIcon.vue';
import CompRate from './element-custom/CompRate.vue';
import ProductParameterTable from '../components/ProductParameterTable.vue';
import { productStore } from '../store';
import { ICartItem } from '../types';

@Options({
    components: {
        IconComponent,
        CompRate,
        ProductParameterTable,
    },
    props: {
        product: Object,
    },
})
export default class ProductCartCatalog extends Vue {
    // product!: Record<string, string>;

    formatPriceUS(price: number) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(price);
    }

    addToCart(id: string) {
        const cartItem: ICartItem = {
            id: id || '',
            quantity: 1,
        };
        productStore.addToCart(cartItem);
    }
}
</script>

<style lang="scss" scoped>
.card-product-catalog {
    margin-bottom: 15px;
    padding: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    .el-col {
        height: 100%;
        .grid-content {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .category-product-filter {
                margin: 5% 0 3% 0;
            }
            .description-product-filter {
                display: flex;
                /* flex-wrap: wrap; */
                justify-content: space-between;
                .name-product-filter {
                    margin-right: 46px;
                    min-width: 200px;
                }
            }
            .add-cart-btn {
                color: #0156ff;
                border: 2px solid #0156ff;
                background-color: #fff;
                border-radius: 20px;
                padding: 5px 15px;
                width: fit-content;
                margin-top: 10px;
                display: flex;
            }
        }
        .status-link-product-filter {
            div {
                display: flex;
                flex-wrap: wrap;
                flex-direction: row;
                align-items: center;
                justify-content: flex-end;
                .text-status-stock-product-filter {
                    margin: 0 0 0 4px;
                }
            }
            .link-product-filter .icon-component {
                margin-left: 6px;
            }
        }
    }
}
</style>
