<template>
    <div id="app">
        <div class="title-excercise-one">Inside Open Art</div>
        <ul>
            <li v-for="(option, index) in listOption" :key="index">
                <comp-option
                    :icon="option.src"
                    :title="option.title"
                    :contents="option.contents"
                />
            </li>
        </ul>
    </div>
</template>

<script>
import CompOption from '../components/CompOption.vue';

export default {
    name: 'App',
    components: {
        CompOption,
    },
    data() {
        return {
            listOption: [
                {
                    src: require('../../../assets/images/bai1.1/Prison.png'),
                    title: '4pt grid system',
                    contents: [
                        'Base on 4pt grid system. Our UI kit help you create perfect white space',
                    ],
                },
                {
                    src: require('../../../assets/images/bai1.1/ColorDropper.png'),
                    title: 'Color style',
                    contents: [
                        'All color in OpenArt are styled. You can change all design color with one click',
                    ],
                },
                {
                    src: require('../../../assets/images/bai1.1/TextColor.png'),
                    title: 'Free font',
                    contents: [
                        'OpenArt use Epilogue font family',
                        'Available with open licence in gooogle font',
                    ],
                },
                {
                    src: require('../../../assets/images/bai1.1/ToggleOn.png'),
                    title: 'Darkmode avaiable',
                    contents: [
                        'Our UI Kit support darkmode',
                        'Chage your design to dark mode with one click',
                    ],
                },
                {
                    src: require('../../../assets/images/bai1.1/Design.png'),
                    title: 'Easy to customize',
                    contents: ['Create any design with OpenArt UI kits '],
                },
                {
                    src: require('../../../assets/images/bai1.1/FourSquares.png'),
                    title: 'Variant components',
                    contents: [
                        'All component art variant, easy to design,easy to control',
                    ],
                },
            ],
        };
    },
};
</script>

<style scoped>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
    color: #2c3e50;
    margin-top: 60px;
    background-image: url('../../../assets/images/bai1.1/bg.png');
}

body {
    /* background-image: url('../../../assets/images/bai1.1/bg.png'); */
}

.title-excercise-one {
    text-align: center;
    font-size: 40px;
    font-weight: bold;
}

ul {
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
}

li {
    border: 2px solid #fff;
    margin: 1%;
    width: 30%;
    border-radius: 16px;
    box-sizing: content-box;
    background: #fff;
}

.comp-option {
    justify-content: left;
    padding: 40px 20px 15px 40px;
}
</style>
