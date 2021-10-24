<template>
    <div class="filter-product-tag">
        <div class="name-product-tag">
            <b>{{ name }}</b>
        </div>
        <div class="number-product-tag">({{ number }})</div>
        <div class="delete-tag">x</div>
    </div>
</template>

<script>
export default {
    name: 'filter-product-tag',
    props: {
        name: {
            type: String,
        },
        number: {
            type: Number,
        },
    },
};
</script>

<style scope>
.filter-product-tag {
    border: 1px solid rgb(172, 172, 172);
    display: flex;
    flex-wrap: wrap;
    width: fit-content;
    padding: 10px 17px;
    margin-right: 6px;
}
.number-product-tag {
    color: rgb(192, 192, 192);
    margin-left: 5px;
}
.delete-tag {
    color: #fff;
    background-color: #c94d3f;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    margin-left: 5px;
}
</style>
