<template>
    <div class="card-product-filter">
        <el-row :gutter="53">
            <el-col :span="6" style="height: auto">
                <div class="grid-content bg-purple image-rate-product-filter">
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
                <div class="grid-content bg-purple information-product-filter">
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
                        <svg
                            width="19"
                            height="18"
                            viewBox="0 0 19 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M11.4579 17.3332C12.0104 17.3332 12.5403 17.1137 12.931 16.723C13.3217 16.3323 13.5412 15.8024 13.5412 15.2498C13.5412 14.6973 13.3217 14.1674 12.931 13.7767C12.5403 13.386 12.0104 13.1665 11.4579 13.1665C10.9054 13.1665 10.3754 13.386 9.98475 13.7767C9.59404 14.1674 9.37455 14.6973 9.37455 15.2498C9.37455 15.8024 9.59404 16.3323 9.98475 16.723C10.3754 17.1137 10.9054 17.3332 11.4579 17.3332ZM4.16622 17.3332C4.71875 17.3332 5.24866 17.1137 5.63936 16.723C6.03006 16.3323 6.24955 15.8024 6.24955 15.2498C6.24955 14.6973 6.03006 14.1674 5.63936 13.7767C5.24866 13.386 4.71875 13.1665 4.16622 13.1665C3.61368 13.1665 3.08378 13.386 2.69308 13.7767C2.30238 14.1674 2.08288 14.6973 2.08288 15.2498C2.08288 15.8024 2.30238 16.3323 2.69308 16.723C3.08378 17.1137 3.61368 17.3332 4.16622 17.3332ZM17.7475 2.66963C18.0075 2.66124 18.2541 2.55204 18.4351 2.36513C18.6161 2.17822 18.7172 1.92824 18.7172 1.66807C18.7172 1.40789 18.6161 1.15791 18.4351 0.971001C18.2541 0.784088 18.0075 0.674891 17.7475 0.666504H16.5485C15.6089 0.666504 14.7964 1.31859 14.5923 2.23525L13.2871 8.11234C13.0829 9.029 12.2704 9.68109 11.3308 9.68109H3.5058L2.00372 3.67067H11.7381C11.9957 3.65892 12.2388 3.54831 12.417 3.36187C12.5951 3.17543 12.6945 2.92749 12.6945 2.66963C12.6945 2.41177 12.5951 2.16383 12.417 1.97739C12.2388 1.79094 11.9957 1.68034 11.7381 1.66859H2.00372C1.6992 1.6685 1.39868 1.73784 1.12498 1.87133C0.85129 2.00483 0.611635 2.19896 0.424236 2.43899C0.236837 2.67901 0.106628 2.9586 0.0435085 3.2565C-0.0196133 3.5544 -0.0139828 3.86277 0.0599689 4.15817L1.56205 10.1665C1.67034 10.6 1.92048 10.9849 2.27269 11.2599C2.62489 11.5349 3.05894 11.6843 3.5058 11.6842H11.3308C12.2425 11.6843 13.1269 11.3735 13.8381 10.8031C14.5492 10.2326 15.0446 9.43669 15.2423 8.54671L16.5485 2.66963H17.7475Z"
                                fill="#0156FF"
                            />
                        </svg>
                        <b style="padding-left: 5px">Add To Cart</b>
                    </button>
                </div>
            </el-col>
            <el-col :span="4" style="height: auto">
                <div class="grid-content bg-purple status-link-product-filter">
                    <div v-if="statusStock == 'in stock'">
                        <svg
                            width="10"
                            height="10"
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clip-rule="evenodd"
                                fill="#78A962"
                            />
                        </svg>
                        <p
                            class="text-status-stock-product-filter"
                            style="color: #78a962"
                        >
                            in stock
                        </p>
                    </div>
                    <div v-else>
                        <svg
                            width="10"
                            height="10"
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                clip-rule="evenodd"
                                fill="#C94D3F"
                            />
                        </svg>
                        <p
                            class="text-status-stock-product-filter"
                            style="color: #c94d3f"
                        >
                            out stock
                        </p>
                    </div>
                    <div class="link-product-filter">
                        <svg
                            width="30"
                            height="30"
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle
                                cx="15"
                                cy="15"
                                r="14"
                                stroke="#A2A6B0"
                                stroke-width="2"
                            />
                            <path
                                d="M21.6667 9.83398H8.33333C7.8731 9.83398 7.5 10.2071 7.5 10.6673V20.6673C7.5 21.1276 7.8731 21.5007 8.33333 21.5007H21.6667C22.1269 21.5007 22.5 21.1276 22.5 20.6673V10.6673C22.5 10.2071 22.1269 9.83398 21.6667 9.83398Z"
                                stroke="#A2A6B0"
                                stroke-width="1.7"
                                stroke-linecap="round"
                            />
                            <path
                                d="M7.5 11.084L15 15.6673L22.5 11.084"
                                stroke="#A2A6B0"
                                stroke-width="1.7"
                                stroke-linecap="round"
                            />
                        </svg>
                        <svg
                            width="30"
                            height="30"
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle
                                cx="15"
                                cy="15"
                                r="14"
                                stroke="#A2A6B0"
                                stroke-width="2"
                            />
                            <path
                                d="M10.379 21.0882V16.6025"
                                stroke="#A2A6B0"
                                stroke-width="2.2"
                                stroke-linecap="round"
                            />
                            <path
                                d="M14.9586 21.0884L14.9586 7.69238"
                                stroke="#A2A6B0"
                                stroke-width="2.2"
                                stroke-linecap="round"
                            />
                            <path
                                d="M19.6202 21.0882L19.6202 12.2466"
                                stroke="#A2A6B0"
                                stroke-width="2.2"
                                stroke-linecap="round"
                            />
                        </svg>
                        <svg
                            width="30"
                            height="30"
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle
                                cx="15"
                                cy="15"
                                r="14"
                                stroke="#A2A6B0"
                                stroke-width="2"
                            />
                            <path
                                d="M14.6851 11.8254L15.3954 12.5419L16.1056 11.8254C16.7788 11.1462 17.8139 10.375 18.8922 10.375C19.9606 10.375 20.8026 10.7307 21.3714 11.278C21.9374 11.8225 22.2936 12.6141 22.2936 13.6095C22.2936 14.6805 21.8643 15.5925 21.1287 16.4761C20.3739 17.3829 19.3563 18.1913 18.2509 19.0643L18.2252 19.0846C17.2883 19.8241 16.2458 20.647 15.3958 21.5675C14.5542 20.655 13.5216 19.8387 12.593 19.1047L12.5424 19.0646L12.542 19.0643C11.4363 18.1911 10.4189 17.3825 9.66433 16.4757C8.92905 15.5921 8.5 14.6802 8.5 13.6095C8.5 12.6141 8.8562 11.8226 9.42223 11.278C9.99108 10.7308 10.8333 10.375 11.9021 10.375C12.9791 10.375 14.0111 11.1454 14.6851 11.8254Z"
                                stroke="#A2A6B0"
                                stroke-width="2"
                            />
                        </svg>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'card-product-filter',

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
        .bg-purple {
            background-color: #fff !important;
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
            }
        }
        .status-link-product-filter div {
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            align-items: center;
            justify-content: flex-end;
            .text-status-stock-product-filter {
                margin: 0 0 0 4px;
            }
            .link-product-filter svg {
                margin-left: 6px;
            }
        }
    }
}
</style>
