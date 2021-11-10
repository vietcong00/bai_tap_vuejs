<template>
    <div class="information-product">
        <div class="header-information-product">
            <el-row>
                <el-col :span="14"
                    ><div class="grid-content information-product-tab">
                        <el-tabs v-model="tabActive" @tab-click="handleClick">
                            <el-tab-pane
                                label="About Product"
                                name="about-product"
                            ></el-tab-pane>
                            <el-tab-pane label="Details" name="details"></el-tab-pane>
                            <el-tab-pane label="Specs" name="specs"></el-tab-pane>
                        </el-tabs>
                    </div>
                </el-col>
                <el-col :span="10">
                    <div class="grid-content price-cart-product">
                        <div class="price-information-product">
                            On Sale from
                            <b>{{ formatCurrency(productDetail.newPrice) }}</b>
                        </div>
                        <el-input-number
                            class="comp-input-number"
                            v-model="quantity"
                            :min="1"
                            :max="10"
                            controls-position="right"
                            @change="handleChange"
                        />
                        <button class="add-cart-btn" @click="addToCart">
                            Add to Cart
                        </button>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="content-information-product">
            <el-row>
                <el-col :span="14">
                    <div class="grid-content description-product-group">
                        <div class="header-description-product-group">
                            <el-breadcrumb separator-class="el-icon-arrow-right">
                                <el-breadcrumb-item :to="{ path: '/' }"
                                    >Home</el-breadcrumb-item
                                >
                                <el-breadcrumb-item>Laptops</el-breadcrumb-item>
                                <el-breadcrumb-item> MSI WS Series</el-breadcrumb-item>
                            </el-breadcrumb>
                            <div class="seris-name-product">MSI MPG Trident 3</div>
                            <div class="review-product-link">
                                Be the first to review this product
                            </div>
                        </div>
                        <div
                            class="content-description-product-group"
                            v-show="tabActive === 'about-product'"
                        >
                            <div class="name-product">
                                {{ productDetail.name }}
                            </div>
                            <select-color
                                class="list-item-filter"
                                :listColor="productDetail.colors"
                            />
                        </div>
                        <div
                            class="content-description-product-group"
                            v-show="tabActive === 'details'"
                        >
                            <ul class="list-detail-product">
                                <li
                                    v-for="(item, index) in productDetail.details"
                                    :key="index"
                                >
                                    {{ item }}
                                </li>
                            </ul>
                        </div>
                        <div
                            class="content-description-product-group"
                            v-show="tabActive === 'specs'"
                        >
                            <product-parameter-table
                                :parameter="productDetail.parameter"
                            />
                        </div>
                        <div class="footer-description-product-group">
                            <div class="category-contact-product">
                                <div class="contact-group">
                                    <b style="font-weight: 600">Have a Question?</b>
                                    <div class="contact-us">Contact Us</div>
                                </div>
                                <div class="category-product">
                                    {{ productDetail.category }}
                                </div>
                            </div>
                            <div class="more-information">+ More information</div>
                        </div>
                    </div>
                </el-col>
                <el-col :span="10">
                    <div class="grid-content image__link__information-product">
                        <div class="link__information-product">
                            <icon-component :iconName="'love-icon'" />
                            <icon-component :iconName="'rank-icon'" />
                            <icon-component :iconName="'mail-icon'" />
                        </div>
                        <product-image-carousel :images="productDetail.images" />
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { useRoute } from 'vue-router';
import { productStore } from '../store';
import { formatCurrency } from '../util';
import { ICartItem } from '../types';
import IconComponent from '../components/CompIcon.vue';
import SelectColor from '../components/CompSelectColor.vue';
import ProductParameterTable from '../components/ProductParameterTable.vue';
import ProductImageCarousel from '../components/ProductImageCarousel.vue';

@Options({
    name: 'information-product',
    components: {
        IconComponent,
        SelectColor,
        ProductParameterTable,
        ProductImageCarousel,
    },
    methods: {
        formatCurrency,
    },
})
export default class CardProductCart extends Vue {
    tabActive = 'about-product';
    route = useRoute();
    id = this.route.params.id;

    productDetail = productStore.getProductList.find((el) => el.id === this.id);
    num = 0;
    quantity = this.productDetail?.quantity;
    colorChosen = '';

    handleChosenColor(value: string): void {
        if (this.colorChosen === value) {
            this.colorChosen = '';
        } else {
            this.colorChosen = value;
        }
    }

    handleClick(tab: any): void {
        this.tabActive = tab.props.name;
    }

    addToCart(): void {
        const cartItem: ICartItem = {
            id: this.productDetail?.id ?? '',
            quantity: this.quantity ?? 1,
        };
        productStore.addToCart(cartItem);
    }
}
</script>

<style lang="scss" scoped>
.header-information-product {
    padding: 20px 0;
    border-bottom: 1px solid #cacdd8;
    .price-cart-product {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        align-items: center;
        .price-information-product {
            font-size: 14px;
            line-height: 21px;
        }
        .comp-input-number {
            margin: 0 30px;
        }
        .add-cart-btn {
            padding: 10px 30px;
            color: #fff;
            font: size 14px;
            font-weight: 600;
            line-height: 21px;
            background-color: #0156ff;
            border-radius: 30px;
        }
    }
}
.description-product-group {
    padding: 60px 10% 60px 25%;
    background-color: #f5f7ff;
    .header-description-product-group {
        padding-bottom: 24px;
        .seris-name-product {
            padding: 25px 0 13px 0;
            font-size: 32px;
            font-weight: 500;
            line-height: 48px;
        }
        .review-product-link {
            color: #0156ff;
            font-size: 12px;
            font-weight: 400;
            line-height: 18px;
        }
    }
    .content-description-product-group {
        margin-bottom: 31px;
        .name-product {
            margin-bottom: 46px;
            font-size: 18px;
            font-weight: 300;
            line-height: 30px;
        }

        .list-detail-product {
            font-size: 14px;
            font-weight: 300;
        }
    }

    .category-contact-product {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20%;
        font-size: 12px;
        font-weight: 600;
        line-height: 18px;
        .contact-group {
            display: flex;
            .contact-us {
                padding-left: 10px;
                color: #0156ff;
            }
        }
    }
    .more-information {
        margin-left: -20%;
        font-weight: 700;
        font-size: 18px;
        line-height: 27px;
    }

    .image__link__information-product {
        display: flex;
        flex-direction: row;
        .link__information-product {
            margin: 20px 0 0 25px;
            .icon-component {
                margin-bottom: 7px;
            }
        }
    }
}
</style>
