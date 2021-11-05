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
    name: 'product-image-carousel',
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
        align-items: center;
        font-size: 12px;
        font-weight: 300;
        .learn-more {
            height: -webkit-fill-available;
            width: 170px;
            margin-left: 10px;
            padding-left: 10px;
            border-left: 2px solid #00aeb8;
        }
    }
}
</style>
