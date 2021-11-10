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
<style lang="scss" scoped></style>
