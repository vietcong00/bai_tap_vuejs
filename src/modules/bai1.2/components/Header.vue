<template>
    <div class="header-comp">
        <div class="select-group">
            <div class="select-comp sort-select">
                <el-select v-model="value" filterable placeholder="Useless first">
                    <el-option
                        v-for="item in sortOption"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    >
                    </el-option>
                </el-select>
                <p class="text-sort-by">SORT BY</p>
            </div>
            <div class="select-comp condition-select">
                <el-select v-model="value" placeholder="Condition">
                    <el-option-group
                        v-for="group in options"
                        :key="group.label"
                        :label="group.label"
                    >
                        <el-option
                            v-for="item in group.options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        >
                        </el-option>
                    </el-option-group>
                </el-select>
            </div>

            <div class="select-comp delivery-select">
                <el-select v-model="value" placeholder="Delivery options">
                    <el-option
                        v-for="item in cities"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    >
                        <span style="float: left">{{ item.label }}</span>
                        <span
                            style="
                                float: right;
                                color: var(--el-text-color-secondary);
                                font-size: 13px;
                            "
                            >{{ item.value }}</span
                        >
                    </el-option>
                </el-select>
            </div>
        </div>
        <div class="toggle-group">
            <div class="toogle-element show-toggle">
                <el-radio-group v-model="showToggle" size="small">
                    <el-radio-button label="show-all">Show all</el-radio-button>
                    <el-radio-button label="auction">Auction</el-radio-button>
                    <el-radio-button label="by-now">By now</el-radio-button>
                </el-radio-group>
                <div style="margin: 20px"></div>
            </div>
            <div class="toogle-element type-show-toggle">
                <el-radio-group v-model="typeShowToggle" size="small">
                    <el-radio-button label="grid">
                        <div style="position: relative; top: -3px">
                            <img src="../../../assets/images/bai1.2/Icon/grid.png" />
                        </div>
                    </el-radio-button>
                    <el-radio-button label="list">
                        <div style="position: relative; top: -1.5px">
                            <img src="../../../assets/images/bai1.2/Icon/list.png" />
                        </div>
                    </el-radio-button>
                </el-radio-group>
                <div style="margin: 20px"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'header-comp',
    data() {
        return {
            sortOption: [
                {
                    value: 'Option1',
                    label: 'Option1',
                },
                {
                    value: 'Option2',
                    label: 'Option2',
                },
                {
                    value: 'Option3',
                    label: 'Option3',
                },
                {
                    value: 'Option4',
                    label: 'Option4',
                },
                {
                    value: 'Option5',
                    label: 'Option5',
                },
            ],
            options: [
                {
                    label: 'Popular cities',
                    options: [
                        {
                            value: 'Shanghai',
                            label: 'Shanghai',
                        },
                        {
                            value: 'Beijing',
                            label: 'Beijing',
                        },
                    ],
                },
                {
                    label: 'City name',
                    options: [
                        {
                            value: 'Chengdu',
                            label: 'Chengdu',
                        },
                        {
                            value: 'Shenzhen',
                            label: 'Shenzhen',
                        },
                        {
                            value: 'Guangzhou',
                            label: 'Guangzhou',
                        },
                        {
                            value: 'Dalian',
                            label: 'Dalian',
                        },
                    ],
                },
            ],
            cities: [
                {
                    value: 'Beijing',
                    label: 'Beijing',
                },
                {
                    value: 'Shanghai',
                    label: 'Shanghai',
                },
                {
                    value: 'Nanjing',
                    label: 'Nanjing',
                },
                {
                    value: 'Chengdu',
                    label: 'Chengdu',
                },
                {
                    value: 'Shenzhen',
                    label: 'Shenzhen',
                },
                {
                    value: 'Guangzhou',
                    label: 'Guangzhou',
                },
            ],
            showToggle: 'show-all',
            typeShowToggle: 'list',
        };
    },
};
</script>

<style lang="scss">
.content-exercise-two {
    .header-comp {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        height: 40px;
        margin-bottom: 30px;
        .select-group {
            display: flex;
            flex-wrap: wrap;
            .select-comp {
                margin-right: 15px;
            }
            .sort-select {
                width: 135px;
                margin: 0px 15px 15px 0px;
                .el-input {
                    .el-input__inner {
                        font-weight: bold;
                    }
                }
                .text-sort-by {
                    position: relative;
                    top: -48.5px;
                    left: 13px;
                    font-size: 9px;
                    background-color: #fff;
                    width: fit-content;
                    color: rgb(165, 165, 165);
                    padding: 3px;
                }
            }
            .condition-select {
                width: 112px;
                margin: 0px 15px 15px 0px;
            }
            .delivery-select {
                width: 152px;
                margin: 0px 15px 15px 0px;
            }
        }
        .toggle-group {
            display: flex;
            flex-wrap: wrap;
            width: 40%;
            justify-content: flex-end;
            .toogle-element {
                .el-radio-group {
                    .el-radio-button {
                        .el-radio-button__inner {
                            height: 32px;
                            background-color: #e7e7e7;
                        }
                    }
                    .is-active {
                        /* --el-font-weight-primary: 700; */
                        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
                        .el-radio-button__inner {
                            border-radius: 4px !important;
                            background-color: #fff !important;
                            color: #2264d1 !important;
                            font-weight: bold;
                        }
                    }
                }
            }
            .type-show-toggle {
                margin-left: 5%;
            }
        }
    }
}
</style>
