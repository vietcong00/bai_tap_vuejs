<template>
    <div class="component-dropdown">
        <div>
            <b style="color: #8c8c8c">{{ nameElement }}</b>
        </div>
        <el-dropdown>
            <div class="el-dropdown-link">
                <b>{{ selected }}</b>
                <i
                    class="el-icon-arrow-down el-icon--right"
                    style="margin-left: 10px"
                ></i>
            </div>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item
                        v-for="(item, index) in options"
                        :key="index"
                        @click="selectText(item)"
                        >{{ item }}</el-dropdown-item
                    >
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
    name: 'comp-dropdown',
    props: {
        nameElement: {
            type: String,
        },
        options: {
            type: Array,
        },
    },
})
export default class CompDropdown extends Vue {
    options!: Array<string>;
    selected = this.options[0];

    selectText(item: string) {
        this.selected = item;
        this.$emit('selectText', item);
    }
}
</script>

<style lang="scss" scoped>
.component-dropdown {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 11px 10px 11px 22px;
    border: 2px solid #d0d0d0;
}
</style>
