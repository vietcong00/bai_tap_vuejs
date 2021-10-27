<template>
    <div class="card-product-filter">
        <el-row :gutter="53">
            <el-col :span="6" style="height: auto">
                <div class="grid-content image-rate-product-filter">
                    <img :src="imgLink" style="width: 100%" />
                    <div class="rate-reviews-product-filter">
                        <el-rate v-model="value" disabled />
                        <p style="color: #a2a6b0; margin: -4px 0 0 8px">
                            Reviews ({{ reviews }})
                        </p>
                    </div>
                </div>
            </el-col>
            <el-col :span="14" style="height: auto">
                <div class="grid-content information-product-filter">
                    <div class="category-product-filter">
                        {{ category }}
                    </div>
                    <div class="description-product-filter">
                        <div class="name-product-filter">
                            {{ name }}
                        </div>
                        <div class="parameter-product-filter">
                            <el-table
                                :data="tableData"
                                style="width: 100%"
                                show-header="false"
                            >
                                <el-table-column prop="option" width="120px" />
                                <el-table-column prop="parameter" width="120px" />
                            </el-table>
                        </div>
                    </div>
                    <!-- <div class="color-product-filter">
                        <div style="font-size: 15px"><b>Color :</b></div>
                        <div
                            style="width: 20px; height: 20px"
                            :style="{ backgroundColor: color }"
                        ></div>
                    </div> -->
                    <div class="price-product-filter">
                        <del style="font-size: 15px">{{ oldPrice }}</del>
                        <b style="padding-left: 7px; font-size: 18px">{{ newPrice }}</b>
                    </div>
                    <button class="add-cart-btn">
                        <icon-component :iconName="'cart-icon'" />
                        <b style="padding-left: 5px">Add To Cart</b>
                    </button>
                </div>
            </el-col>
            <el-col :span="4" style="height: auto">
                <div class="grid-content status-link-product-filter">
                    <div v-if="statusStock == 'in stock'">
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
</template>

<script>
import IconComponent from '../elements/IconComponent.vue';
export default {
    name: 'card-product-filter',
    components: {
        IconComponent,
    },
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
        category: {
            type: String,
        },
        color: {
            type: String,
        },
        name: {
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
            tableData: [
                {
                    option: 'CPU',
                    parameter: 'N/A',
                },
                {
                    option: 'Featured',
                    parameter: 'N/A',
                },
                {
                    option: 'I/O Ports',
                    parameter: 'N/A',
                },
            ],
        };
    },
};
</script>

<style lang="scss">
.card-product-filter {
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
            .rate-reviews-product-filter {
                display: flex;
                flex-wrap: wrap;
                flex-direction: row;
                align-items: center;
                width: 100%;
                .el-rate {
                    .el-rate__item {
                        .el-rate__icon {
                            margin-right: 2px;
                            font-size: 13px;
                        }
                    }
                }
            }
            .description-product-filter {
                display: flex;
                /* flex-wrap: wrap; */
                justify-content: space-between;
                .name-product-filter {
                    margin-right: 46px;
                    min-width: 200px;
                }
                .parameter-product-filter {
                    width: auto;
                    .el-table {
                        thead {
                            tr {
                                display: none;
                            }
                        }
                        tr:nth-child(2n) {
                            background-color: #f5f7ff;
                        }

                        tr:nth-child(2n + 1) {
                            background-color: #fff;
                        }
                    }
                }
            }
            .color-product-filter {
                display: flex;
                flex-direction: row;
                div {
                    margin: 10px 10px 10px;
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
