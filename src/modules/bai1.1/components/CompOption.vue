<template>
    <div class="comp-option">
        <div class="icon-comp">
            <img v-bind:src="icon" />
        </div>
        <div class="title-comp">
            <h4>{{ title }}</h4>
        </div>
        <div class="content-comp">
            <p v-for="(content, index) in contents" :key="index">{{ content }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'comp-option',
    props: {
        icon: {
            type: String,
        },
        title: {
            type: String,
            default: 'title Default',
        },
        contents: {
            type: Array,
        },
    },
};
</script>

<style>
.icon-comp {
    margin-bottom: 10px;
}

p {
    margin: 0px;
}
</style>
