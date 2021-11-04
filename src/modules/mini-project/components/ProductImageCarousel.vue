<template lang="">
    <div>
        <div class="product-image-carousel">
            <el-carousel indicator-position="outside" :autoplay="false">
                <el-carousel-item v-for="item in images" :key="item">
                    <img :src="item" />
                    <div class="logo-producer">
                        <icon-component :iconName="'logo-producer-icon'" />
                        <div class="learn-more">
                            own it now, up to 6 months interest free
                            <u>learn more</u>
                        </div>
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import IconComponent from '../components/CompIcon.vue';

@Options({
    components: {
        IconComponent,
    },
    props: {
        images: Array,
    },
})
export default class ProductImageCarousel extends Vue {}
</script>
<style lang="scss">
.product-image-carousel {
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
</style>
