<template>
    <div class="card-product-catalog-grid">
        <div class="product-status-stock">
            <div
                class="status-link-group__element"
                v-if="product.statusStock == 'in stock'"
            >
                <icon-component :iconName="'checked-icon'" />
                <p class="text-status-stock in-stock">in stock</p>
            </div>
            <div class="status-link-group__element" v-else>
                <icon-component :iconName="'cancel-icon'" />
                <p class="text-status-stock out-stock">out stock</p>
            </div>
        </div>
        <router-link :to="{ name: 'information', params: { id: product.id } }">
            <img class="product-image" :src="product.imgLink" />
        </router-link>
        <div class="product-rate">
            <el-rate v-model="product.rate" disabled />
            <p class="review-text">Reviews ({{ product.reviews }})</p>
        </div>
        <div class="product-name">
            {{ product.name }}
        </div>
        <div class="product-price">
            <div class="new-price">
                {{ formatCurrency(product.newPrice) }}
            </div>
            <div class="old-price">
                <del>
                    {{ formatCurrency(product.oldPrice) }}
                </del>
            </div>
        </div>
        <div class="product-category">
            {{ product.category }}
        </div>
        <div class="footer-card">
            <button class="add-cart-btn" @click="addToCart(product.id)">
                <icon-component :iconName="'cart-icon'" />
                <b style="padding-left: 5px">Add To Cart</b>
            </button>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { productStore } from '../store';
import { ICartItem } from '../types';
import { formatCurrency } from '../util';
import IconComponent from './CompIcon.vue';

@Options({
    name: 'product-card-catalog-grid',
    components: {
        IconComponent,
    },
    props: {
        product: Object,
    },
    methods: {
        formatCurrency,
    },
})
export default class ProductCartCatalogGrid extends Vue {
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
.card-product-catalog-grid {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    width: 23%;
    height: fit-content;
    padding: 1%;
    margin: 10px;
    border: 1px solid rgb(170, 169, 169);
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    .status-link-group__element {
        display: flex;
        .text-status-stock {
            margin-left: 5px;
        }
        .in-stock {
            color: #78a962;
        }
        .out-stock {
            color: #c94d3f;
        }
    }
    .product-image {
        max-width: 100%;
        height: auto;
    }

    .product-name {
        height: 30%;
        margin-top: 12px;
        font-weight: 600;
    }
    .product-price {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 8px;
        .new-price {
            font-size: 24px;
            font-weight: bold;
        }
        .old-price {
            padding: 4px 10px;
            background-color: #f0f0f0;
            color: #ff0000;
            border-radius: 3px;
        }
    }

    .product-category {
        height: 20%;
        margin-top: 8px;
        color: #787885;
        font-size: 14px;
    }

    .footer-card {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 8px;

        .add-cart-btn {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            width: 75%;
            padding: 2% 1%;
            margin: 0 auto;
            background-color: #eafeff;
            color: #0062ff;
            font-size: 100%;
            font-weight: 500;
            border: 1px solid #b2ceff;
            border-radius: 10px;
            &:hover {
                box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
                    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
                    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
            }
        }
    }
}
</style>
