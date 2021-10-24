<template>
    <div class="footer-comp">
        <ul>
            <li v-for="(card, index) in listCard" :key="index">
                <card
                    :imgLink="card.imgLink"
                    :caption="card.caption"
                    :additional="card.additional"
                />
            </li>
        </ul>
    </div>
</template>

<script>
import Card from './Card.vue';
export default {
    name: 'footer-comp',
    data() {
        return {
            listCard: [
                {
                    imgLink: require('../../../assets/images/bai1.2/Icon/lightbulb.png'),
                    caption: 'Clear & Usable user flows',
                    additional: 'Let’s boost yout marketplace',
                },
                {
                    imgLink: require('../../../assets/images/bai1.2/Icon/autofix.png'),
                    caption: 'Fine & Styled components',
                    additional: 'Speed up with Setproduct templates',
                },
                {
                    imgLink: require('../../../assets/images/bai1.2/Icon/palette.png'),
                    caption: 'Customizable & Reusable',
                    additional: 'Take our UX patterns and rebuild',
                },
            ],
        };
    },
    components: {
        Card,
    },
};
</script>

<style scoped>
.footer-comp ul {
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    padding: 0px;
}

.footer-comp ul li {
    padding: 5px;
    border: 2px solid #fff;
    width: 33.333%;
    border-radius: 16px;
    background: #fff;
    text-align: left;
}

.footer-comp .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(226, 226, 226);
    border-radius: 5px;
    padding: 30px;
    height: 100%;
}
</style>
