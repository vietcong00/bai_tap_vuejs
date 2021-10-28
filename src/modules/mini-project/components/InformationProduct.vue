<template>
    <div class="information-product">
        <div class="header-information-product">
            <el-row>
                <el-col :span="12"
                    ><div class="grid-content information-product-tab">
                        <el-tabs v-model="activeName" @tab-click="handleClick">
                            <el-tab-pane
                                label="About Product"
                                name="about-product"
                            ></el-tab-pane>
                            <el-tab-pane label="Details" name="details"></el-tab-pane>
                            <el-tab-pane label="Specs" name="specs"></el-tab-pane>
                        </el-tabs>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="grid-content price-cart-product">
                        <div class="price-information-product">
                            On Sale from <b>$3,299.00</b>
                        </div>
                        <div class="add-cart-number">
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
        </div>
        <div class="content-information-product">
            <el-row>
                <el-col :span="12">
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
                                MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER,
                                16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming
                                Keyboard and Mouse 3 Years Warranty Gaming Desktop
                            </div>
                            <div class="list-item-filter list-item-color-filter">
                                <ul>
                                    <li
                                        v-for="(item, index) in listColor"
                                        :key="index"
                                        @click="handleChosenColor(item)"
                                        :class="item == colorChosen ? 'active' : ''"
                                    >
                                        <div
                                            class="item-color"
                                            :style="{ backgroundColor: item }"
                                        ></div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div
                            class="content-description-product-group"
                            v-show="tabActive === 'details'"
                        >
                            <ul class="list-detail-product">
                                <li v-for="(item, index) in listDetail" :key="index">
                                    {{ item }}
                                </li>
                            </ul>
                        </div>
                        <div
                            class="content-description-product-group"
                            v-show="tabActive === 'specs'"
                        >
                            <div class="parameter-product">
                                <el-table
                                    :data="tableData"
                                    style="width: 100%"
                                    show-header="false"
                                >
                                    <el-table-column prop="option" width="120px" />
                                    <el-table-column prop="parameter" width="240px" />
                                </el-table>
                            </div>
                        </div>
                        <div class="footer-description-product-group">
                            <div class="category-contact-product">
                                <div class="contact-group">
                                    <b style="font-weight: 600">Have a Question?</b>
                                    <div class="contact-us">Contact Us</div>
                                </div>
                                <div class="category-product">SKU D5515AI</div>
                            </div>
                            <div class="more-information">+ More information</div>
                        </div>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="grid-content image__link__information-product">
                        <div class="link__information-product">
                            <icon-component :iconName="'love-icon'" />
                            <icon-component :iconName="'rank-icon'" />
                            <icon-component :iconName="'mail-icon'" />
                        </div>
                        <div class="image__information-product">
                            <el-carousel indicator-position="outside" :autoplay="false">
                                <el-carousel-item v-for="item in listImage" :key="item">
                                    <img :src="item" />
                                    <div class="logo-producer">
                                        <icon-component
                                            :iconName="'logo-producer-icon'"
                                        />
                                        <div class="learn-more">
                                            own it now, up to 6 months interest free
                                            <u>learn more</u>
                                        </div>
                                    </div>
                                </el-carousel-item>
                            </el-carousel>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
import IconComponent from '../elements/IconComponent.vue';
export default {
    name: 'information-product',
    components: {
        IconComponent,
    },
    data() {
        return {
            tabActive: 'about-product',
            num: 0,
            colorChosen: '',
            listColor: ['green', 'black', 'red', 'blue'],
            listDetail: [
                'Intel Core i7-10700F',
                'Intel H410',
                'WHITE',
                'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6',
                'SO-DIMM 16GB (16GB x 1) DDR4 2666MHz',
                '2 total slots (64GB Max)',
                '512GB (1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB (2.5) 5400RPM',
                'Gaming Keyboard GK30 + Gaming Mouse GM11',
                '3.5 HDD (0/0), 2.5 HDD/SSD(1/0), M.2 (1/0)',
                'Intel WGI219Vethernet (10/100/1000M)',
                'AX200 (WIFI 6)+BT5.1',
                'PSU 330W',
                'Fan Cooler',
            ],
            listImage: [
                require('../../../assets/images/mini-project/product0.png'),
                require('../../../assets/images/mini-project/product1.png'),
                require('../../../assets/images/mini-project/product2.png'),
                require('../../../assets/images/mini-project/product3.png'),
            ],
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
    methods: {
        handleChosenColor(value) {
            if (this.colorChosen === value) {
                this.colorChosen = '';
            } else {
                this.colorChosen = value;
            }
        },

        handleClick(tab, event) {
            console.log(tab, event);
            console.log(tab.props);
            this.tabActive = tab.props.name;
        },
    },
};
</script>

<style lang="scss">
.information-product {
    .header-information-product {
        .price-cart-product {
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            align-items: center;
            .add-cart-number {
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
                margin: 0 21px;
            }
            .add-cart-btn {
                border-radius: 30px;
                background-color: #0156ff;
                color: #fff;
                font: size 14px;
                padding: 10px 30px;
            }
        }
    }
    .content-information-product {
        .description-product-group {
            background-color: #f5f7ff;
            .header-description-product-group {
                .seris-name-product {
                    font-size: 32px;
                    font-weight: 500;
                }
                .review-product-link {
                    font-size: 12px;
                    font-weight: 400;
                    color: #0156ff;
                }
            }
            .content-description-product-group {
                .name-product {
                    font-size: 18px;
                    font-weight: 300;
                }

                .list-item-color-filter {
                    ul {
                        display: flex;
                        flex-wrap: wrap;
                        flex-direction: row;
                        list-style-type: none;
                        li {
                            width: 31px;
                            height: 31px;
                            border-radius: 50%;
                            margin-right: 3px;
                            padding: 2px;
                            .item-color {
                                width: 23px;
                                height: 23px;
                                border-radius: 11.5px;
                            }
                        }
                        .active {
                            border: 2px solid #0156ff;
                        }
                    }
                }

                .list-detail-product {
                    font-size: 14px;
                    font-weight: 300;
                }
                .parameter-product {
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
            .footer-description-product-group {
                .category-contact-product {
                    font-size: 12px;
                    font-weight: 300;
                    display: flex;
                    justify-content: space-between;
                    .contact-group {
                        display: flex;
                        .contact-us {
                            color: #0156ff;
                            padding-left: 10px;
                        }
                    }
                }
                .more-information {
                    font-weight: 700;
                    font-size: 18px;
                }
            }
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
            .image__information-product {
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 100%;
                .logo-producer {
                    display: flex;
                    flex-direction: row;
                    font-size: 12px;
                    font-weight: 300;
                    align-items: center;
                    .learn-more {
                        border-left: 2px solid #00aeb8;
                        padding-left: 10px;
                        margin-left: 10px;
                        height: -webkit-fill-available;
                        width: 170px;
                    }
                }
                .el-carousel {
                    .el-carousel__container {
                        height: 500px;
                        width: 500px;
                    }
                    .el-carousel__item {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        img {
                            width: auto;
                            height: auto;
                        }
                        h3 {
                            margin: 0;
                            text-align: center;
                            height: 100%;
                        }
                    }
                    .el-carousel__indicators {
                        li {
                            button {
                                width: 10px;
                                height: 10px;
                                border-radius: 50%;
                                background-color: #cacdd8;
                            }
                        }
                        .is-active {
                            button {
                                background-color: #0156ff;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
