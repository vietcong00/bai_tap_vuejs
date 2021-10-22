<template>
    <div class="product">
        <div class="image">
            <img :src="imgLink" style="max-width: 100%; height: auto" />
        </div>
        <div class="description">
            {{ description }}
        </div>
        <div class="price-sale">
            <div class="price">
                {{ price }}
            </div>
            <div class="sale" :class="sale.type">
                {{ sale.content }}
            </div>
        </div>
        <div class="additional">
            {{ additional }}
        </div>
        <div class="rating-watch">
            <div class="rating-star">
                <el-rate
                    v-model="value"
                    disabled
                    show-score
                    text-color="#5E6366"
                    score-template="{value}"
                />
            </div>
            <div class="watch"></div>
            <button class="watch-btn">
                <img src="../../../assets/images/bai1.2/Icon/heart.png" />
                Watch
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'product',
    props: {
        imgLink: {
            type: String,
        },
        description: {
            type: String,
        },
        price: {
            type: String,
        },
        sale: {
            type: Object,
        },
        additional: {
            type: String,
        },
        ratingStar: {
            type: Number,
        },
    },
    data() {
        return {
            value: this.ratingStar,
        };
    },
};
</script>

<style>
.image {
    display: flex;
    justify-content: center;
}
.description {
    height: 60px;
    margin-top: 12px;
}
.price-sale {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 8px;
}

.price {
    font-size: 24px;
    font-weight: bold;
}
.OFF {
    background-color: #ecf7ed;
    color: #37833b;
    padding: 4px 10px;
}

.deal {
    background-color: #fdedf2;
    color: #c23564;
    padding: 4px 6px;
}

.additional {
    color: #787885;
    font-size: 14px;
    margin-top: 8px;
    height: 30px;
}

.rating-watch {
    margin-top: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.rating-watch .rating-star {
    width: 50%;
}

.rating-watch .el-rate__icon {
    margin-right: auto;
    font-size: 15px;
}

.rating-watch .el-rate__text {
    margin-left: 10px;
}

.rating-watch .watch-btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3% 2.5%;
    color: #5894f3;
    font-size: 100%;
    border: 1px solid #bdd5ff;
    background-color: #fff;
    border-radius: 5px;
    max-width: 75px;
    width: 45%;
    height: 30px;
    font-weight: 700;
}
</style>
