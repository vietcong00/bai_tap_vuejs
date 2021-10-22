<template>
    <div class="search-chip">
        <div class="caption">{{ caption }}</div>
    </div>
</template>

<script>
export default {
    name: 'search-chip',
    props: {
        caption: {
            type: String,
            default: 'Hello',
        },
    },
};
</script>

<style>
.search-chip {
    background-color: #ededf0;
    border-radius: 16px;
    width: fit-content;
}

.caption {
    padding: 7px 15px;
}
</style>
