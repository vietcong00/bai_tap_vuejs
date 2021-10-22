<template>
    <div class="bg-exercise-two">
        <div class="content-exercise-two">
            <header-comp />
            <recommended :listCaption="listCaption" />

            <list-product :listProduct="listProduct" />
            <footer-comp />
        </div>
    </div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import HeaderComp from '../components/Header.vue';
import ListProduct from '../components/ListProduct.vue';
import Recommended from '../components/Recommended.vue';
import FooterComp from '../components/Footer.vue';

export default {
    name: 'App',
    components: {
        // HelloWorld,
        HeaderComp,
        ListProduct,
        Recommended,
        FooterComp,
    },
    data() {
        return {
            listProduct: [
                {
                    imgLink: require('../../../assets/images/bai1.2/ProductImage/1.png'),
                    description:
                        'Vintage Typewriter to post awesome stories about UI design and webdev.',
                    price: '$49.50',
                    sale: { type: '', content: '' },
                    additional: 'Eligible for Shipping To Mars or somewhere else',
                    ratingStar: 4.05,
                },
                {
                    imgLink: require('../../../assets/images/bai1.2/ProductImage/2.png'),
                    description:
                        'Lee Pucker design. Leather botinki for handsome designers. Free shipping.',
                    price: '$13.95',
                    sale: { type: '', content: '' },
                    additional: '1258 bids, 359 watchers $5.95 for shipping',
                    ratingStar: 4.56,
                },
                {
                    imgLink: require('../../../assets/images/bai1.2/ProductImage/3.png'),
                    description:
                        'Timesaving kitten to save months on development. Playful, cute, cheap!',
                    price: '$128.99',
                    sale: { type: '', content: '' },
                    additional: 'Eligible for nothing :(',
                    ratingStar: 4.87,
                },
                {
                    imgLink: require('../../../assets/images/bai1.2/ProductImage/4.png'),
                    description:
                        'Plastic useless plugs and tubes for high-fidelity prototyping. Fit & Eat!',
                    price: '$12.48',
                    sale: { type: 'OFF', content: '50% OFF' },
                    additional: 'Wordwide shitting available Buyers protection possible!',
                    ratingStar: 4.99,
                },
                {
                    imgLink: require('../../../assets/images/bai1.2/ProductImage/5.png'),
                    description:
                        'Creativity stimulating lotion. Drink every morning to generate better ideas!',
                    price: '$12.48',
                    sale: { type: '', content: '' },
                    additional: 'Wordwide shifting available Buyers protection possible!',
                    ratingStar: 4.99,
                },
                {
                    imgLink: require('../../../assets/images/bai1.2/ProductImage/6.png'),
                    description: 'Prototyping items to create a lot if useless things...',
                    price: '$128.99',
                    sale: { type: '', content: '' },
                    additional: 'Showcasing onHovered state',
                    ratingStar: 4.87,
                },
                {
                    imgLink: require('../../../assets/images/bai1.2/ProductImage/7.png'),
                    description: 'John Von Ebalkin SPRING ',
                    price: '$13.95',
                    sale: { type: 'deal', content: 'Cool deal!' },
                    additional: '1258 bids, 359 watchers $5.95 for shipping',
                    ratingStar: 4.56,
                },
                {
                    imgLink: require('../../../assets/images/bai1.2/ProductImage/8.png'),
                    description:
                        'Envelope, Stripes, Pencil and etc. Purchase this kit today and feel OKAY',
                    price: '$9.50',
                    sale: { type: '', content: '' },
                    additional: 'Eligible for Shipping To Mars or somewhere else',
                    ratingStar: 4.77,
                },
            ],
            listCaption: [
                'worldwide shipping',
                'under $50',
                'kitten',
                'plastic plugs',
                'pucker shoes',
                'vintage typewriter',
            ],
        };
    },
};
</script>

<style scoped>
* {
    box-sizing: border-box;
}

.bg-exercise-two {
    background-color: #9e9e9e;
}

.content-exercise-two {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    align-content: center;
    margin: 0;
    max-width: 1000px;
    padding: 20px;
    background-color: #fff;
    margin: 0 auto;
}
</style>
