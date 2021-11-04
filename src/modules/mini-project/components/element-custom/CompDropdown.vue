<template>
    <div class="component-dropdown">
        <div>
            <b style="color: #8c8c8c">{{ nameElement }}</b>
        </div>
        <el-dropdown>
            <div class="el-dropdown-link">
                <b>{{ options[0] }}</b>
                <i
                    class="el-icon-arrow-down el-icon--right"
                    style="margin-left: 10px"
                ></i>
            </div>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item v-for="(item, index) in options" :key="index">{{
                        item
                    }}</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</template>

<script>
export default {
    name: 'el-dropdown-ct',
    props: {
        nameElement: {
            type: String,
        },
        options: {
            type: Array,
        },
    },
};
</script>

<style scoped>
.component-dropdown {
    display: flex;
    flex-wrap: wrap;
    border: 2px solid #d0d0d0;
    align-items: center;
    padding: 11px 10px 11px 22px;
}
</style>
