// Header: tab Coctact + navbar + options(search + cart + account )
<template>
    <div class="header-comp">
        <!-- tab contact -->
        <div class="general_information">
            <div class="general_information__content">
                <el-dropdown :hide-on-click="true">
                    <span class="el-dropdown-link">
                        <div class="general_information__element">
                            <div class="day-open">
                                {{ dayOpen }}
                            </div>
                            <div class="time-open">
                                {{ timeOpen }}
                            </div>
                            <svg
                                width="6"
                                height="5"
                                viewBox="0 0 6 5"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M5 1.76929L3 3.76929L1 1.76929"
                                    stroke="white"
                                    stroke-width="1.6"
                                    stroke-linecap="round"
                                />
                            </svg>
                        </div>
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item
                                v-for="(item, index) in dayOfWeek"
                                :key="index"
                                @click="changeTimeActice(item)"
                                >{{ item }}</el-dropdown-item
                            >
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
                <div
                    class="
                        general_information__element
                        general_information__address-contact-group
                    "
                >
                    <div class="address-contact-group__address">
                        Visit our showroom in 1234 Street Adress City Address, 1234
                    </div>
                    <div class="address-contact-group__contact"><u>Contact Us</u></div>
                </div>
                <div
                    class="
                        general_information__element
                        general-information__communications
                    "
                >
                    <div class="communications-element">Call Us: (00) 1234 5678</div>
                    <icon-component
                        class="communications-element"
                        :iconName="'facebook-icon'"
                    />
                    <icon-component
                        class="communications-element"
                        :iconName="'instagram-icon'"
                    />
                </div>
            </div>
        </div>
        <!-- navbar -->
        <div class="navbar-option">
            <div class="navbar-option__content">
                <div class="narbar-header">
                    <!-- logo -->
                    <svg
                        width="34"
                        height="41"
                        viewBox="0 0 34 41"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M17.0332 0.945312L0.296997 10.8636V23.0707L17.0332 32.989L30.4589 25.3596V28.9836L17.0332 36.9945L0.296997 26.8855V31.2724L17.0332 41L33.7694 31.2724V19.0653L20.3436 26.8855V23.0707L33.7694 15.0598V10.8636L17.0332 0.945312Z"
                            fill="#0156FF"
                        />
                    </svg>
                    <ul>
                        <li
                            v-for="(caption, index) in listItemNavbar"
                            :key="index"
                            @click="tabActive = caption"
                            :class="tabActive === caption ? 'active' : ''"
                        >
                            <div>{{ caption }}</div>
                        </li>
                    </ul>
                </div>
                <!-- options -->
                <div class="options-header">
                    <!-- search option -->
                    <div class="icon-option-header search-option-header">
                        <icon-component :iconName="'search-icon'" />
                    </div>
                    <!-- cart option -->
                    <router-link :to="{ name: 'shopping-cart' }">
                        <div class="icon-option-header cart-option-header">
                            <el-badge :value="getNumberCart" class="item" type="primary">
                                <icon-component :iconName="'cart-header-icon'" />
                            </el-badge>
                        </div>
                    </router-link>
                    <!-- account -->
                    <div class="icon-option-header account-option-header">
                        <img src="../../../assets/images/mini-project/avatar.png" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import IconComponent from '../elements/IconComponent.vue';
import { productStore } from './../store';

@Options({
    props: {
        listItemNavbar: {
            type: Array,
        },
    },
    components: {
        IconComponent,
    },
})
export default class Header extends Vue {
    tabActive = 'Laptops';
    dayOpen = 'Mon-Thu: ';
    timeOpen = '9:00 AM - 5:30 PM';
    dayOfWeek = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
    ];

    get getNumberCart() {
        console.log(productStore.getCartInfo.size);
        return productStore.getCartInfo.size;
    }

    changeTimeActice(day: string) {
        switch (day) {
            case 'Monday':
            case 'Tuesday':
            case 'Wednesday':
            case 'Thursday':
                this.dayOpen = 'Mon-Thu: ';
                this.timeOpen = '9:00 AM - 5:30 PM';
                break;
            case 'Friday':
                this.dayOpen = 'Fri: ';
                this.timeOpen = '8:00 AM - 6:30 PM';
                break;
            case 'Saturday':
            case 'Sunday':
                this.dayOpen = 'Sat-Sun: ';
                this.timeOpen = '8:00 AM - 9:30 PM';
                break;

            default:
                break;
        }
    }
}
</script>

<style lang="scss" scoped>
.header-comp {
    margin: 0;
    padding: 0 10px 20px 10px;
    border-bottom: 1px solid #e5e5e5;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .general_information {
        background-color: #000;
        width: 100%;
        .general_information__content {
            max-width: 1400px !important;
            margin: 0 auto;
            font-size: 12px;
            font-weight: 600;
            line-height: 18px;
            color: #fff;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            width: 100%;
            padding: 8px;
            .general_information__element {
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                color: rgb(255, 255, 255);
            }
            .day-open {
                color: rgb(170, 170, 170);
                margin-right: 5px;
            }
            .time-open {
                margin-right: 10px;
            }
            .address-contact-group__address {
                color: rgb(170, 170, 170);
                margin-right: 5px;
            }
            .communications-element {
                margin-left: 12.5px;
            }
        }
    }
    .navbar-option {
        width: 100%;
        padding-top: 20px;
        .navbar-option__content {
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            max-width: 1400px !important;
            margin: 0 auto;
            justify-content: space-between;
            .narbar-header {
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                font-weight: bold;
                font-size: 14px;

                ul {
                    list-style-type: none;
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    margin: 0 0 0 -30px;
                    li {
                        margin: 0px 0px 0px 25px;
                        cursor: pointer;
                    }
                    .active {
                        color: #0156ff;
                        border: 2px solid #0156ff;
                        border-radius: 50px;
                        padding: 8px 26px;
                    }
                }
            }
            .options-header {
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                .icon-option-header {
                    margin: 0 0 0 30px;
                }
            }
        }
    }
}
</style>
