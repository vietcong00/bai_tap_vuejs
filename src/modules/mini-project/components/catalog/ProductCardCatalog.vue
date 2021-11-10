<template>
    <div>
        <div class="card-product-catalog">
            <el-row :gutter="53">
                <el-col :span="6" style="height: auto">
                    <div class="grid-content image-rate-product-filter">
                        <router-link
                            :to="{ name: 'information', params: { id: product.id } }"
                        >
                            <img
                                :src="
                                    require(`../../../../assets/images/mini-project/${product.imgLink}`)
                                "
                                style="width: 100%"
                            />
                        </router-link>
                        <div class="comp-rate">
                            <el-rate v-model="product.rate" disabled />
                            <p class="review-text">Reviews ({{ product.reviews }})</p>
                        </div>
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
                                {{ formatCurrency(product.oldPrice) }}
                            </del>
                            <b style="padding-left: 7px; font-size: 18px">
                                {{ formatCurrency(product.newPrice) }}
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
                        <div
                            class="status-link-group__element"
                            v-if="product.statusStock == 'in stock'"
                        >
                            <icon-component :iconName="'checked-icon'" />
                            <p
                                class="text-status-stock-product-filter"
                                style="color: #78a962"
                            >
                                in stock
                            </p>
                        </div>
                        <div class="status-link-group__element" v-else>
                            <icon-component :iconName="'cancel-icon'" />
                            <p
                                class="text-status-stock-product-filter"
                                style="color: #c94d3f"
                            >
                                out stock
                            </p>
                        </div>
                        <div class="link-product-filter status-link-group__element">
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
import { productStore } from '../../store';
import { ICartItem } from '../../types';
import { formatCurrency } from '../../util';
import IconComponent from '../CompIcon.vue';
import ProductParameterTable from '../ProductParameterTable.vue';

@Options({
    name: 'product-card-catalog',
    components: {
        IconComponent,
        ProductParameterTable,
    },
    props: {
        product: Object,
    },
    methods: {
        formatCurrency,
    },
})
export default class ProductCartCatalog extends Vue {
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
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100%;
            .category-product-filter {
                margin: 5% 0 3% 0;
            }
            .description-product-filter {
                display: flex;
                justify-content: space-between;
                .name-product-filter {
                    min-width: 200px;
                    margin-right: 46px;
                }
            }
            .add-cart-btn {
                display: flex;
                width: fit-content;
                margin-top: 10px;
                padding: 5px 15px;
                color: #0156ff;
                background-color: #fff;
                border: 2px solid #0156ff;
                border-radius: 20px;
                &:hover {
                    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
                        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
                        rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
                }
            }
        }

        .status-link-group__element {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
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
</style>
