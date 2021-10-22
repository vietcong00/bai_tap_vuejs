<template>
    <div class="recommended">
        <p style="padding-bottom: 10px"><b>Related</b></p>
        <ul>
            <li v-for="(caption, index) in listCaption" :key="index">
                <search-chip :caption="caption"> </search-chip>
            </li>
        </ul>
    </div>
</template>

<script>
import SearchChip from './SearchChip.vue';
export default {
    name: 'recommended',
    props: {
        listCaption: {
            type: Array,
        },
    },
    components: {
        SearchChip,
    },
};
</script>

<style>
.recommended {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}

.recommended ul {
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-left: -30px;
}

.recommended ul li {
    margin: 0px 0px 10px 10px;
}
</style>
