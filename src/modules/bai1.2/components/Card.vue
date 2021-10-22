<template>
    <div class="card">
        <div class="image-card">
            <img :src="imgLink" />
        </div>
        <div class="caption-card">
            <b>{{ caption }}</b>
        </div>
        <div class="additional-card">
            {{ additional }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'card',
    props: {
        imgLink: {
            type: String,
        },
        caption: {
            type: String,
        },
        additional: {
            type: String,
        },
    },
};
</script>

<style scoped>
.caption-card {
    font-size: 19px;
}
</style>
