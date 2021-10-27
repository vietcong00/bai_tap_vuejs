// Header: navbar + options(search + cart + account )
<template>
    <div class="header-comp">
        <!-- navbar -->
        <div class="navbar-header">
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
                <li v-for="(caption, index) in listItemNavbar" :key="index">
                    <div>{{ caption }}</div>
                </li>
            </ul>
        </div>
        <!-- options -->
        <div class="options-header">
            <!-- search option -->
            <div class="icon-option-header search-option-header">
                <svg
                    width="15"
                    height="15"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
            </div>
            <!-- cart option -->
            <div class="icon-option-header cart-option-header">
                <el-badge :value="2" class="item" type="primary">
                    <svg
                        width="19"
                        height="17"
                        viewBox="0 0 19 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M11.5834 16.8334C12.1359 16.8334 12.6658 16.6139 13.0565 16.2232C13.4472 15.8325 13.6667 15.3026 13.6667 14.7501C13.6667 14.1975 13.4472 13.6676 13.0565 13.2769C12.6658 12.8862 12.1359 12.6667 11.5834 12.6667C11.0308 12.6667 10.5009 12.8862 10.1102 13.2769C9.71951 13.6676 9.50002 14.1975 9.50002 14.7501C9.50002 15.3026 9.71951 15.8325 10.1102 16.2232C10.5009 16.6139 11.0308 16.8334 11.5834 16.8334ZM4.29168 16.8334C4.84422 16.8334 5.37412 16.6139 5.76482 16.2232C6.15552 15.8325 6.37502 15.3026 6.37502 14.7501C6.37502 14.1975 6.15552 13.6676 5.76482 13.2769C5.37412 12.8862 4.84422 12.6667 4.29168 12.6667C3.73915 12.6667 3.20925 12.8862 2.81854 13.2769C2.42784 13.6676 2.20835 14.1975 2.20835 14.7501C2.20835 15.3026 2.42784 15.8325 2.81854 16.2232C3.20925 16.6139 3.73915 16.8334 4.29168 16.8334ZM17.8729 2.16987C18.133 2.16149 18.3796 2.05229 18.5605 1.86538C18.7415 1.67846 18.8427 1.42849 18.8427 1.16831C18.8427 0.908135 18.7415 0.658159 18.5605 0.471245C18.3796 0.284332 18.133 0.175135 17.8729 0.166748H16.674C15.7344 0.166748 14.9219 0.818831 14.7177 1.7355L13.4125 7.61258C13.2083 8.52925 12.3959 9.18133 11.4563 9.18133H3.63127L2.12918 3.17091H11.8636C12.1212 3.15916 12.3643 3.04856 12.5424 2.86211C12.7206 2.67567 12.82 2.42773 12.82 2.16987C12.82 1.91201 12.7206 1.66408 12.5424 1.47763C12.3643 1.29119 12.1212 1.18059 11.8636 1.16883H2.12918C1.82467 1.16874 1.52414 1.23808 1.25045 1.37157C0.976755 1.50507 0.737101 1.69921 0.549702 1.93923C0.362303 2.17925 0.232094 2.45884 0.168974 2.75674C0.105852 3.05464 0.111483 3.36302 0.185434 3.65841L1.68752 9.66675C1.7958 10.1003 2.04594 10.4852 2.39815 10.7602C2.75036 11.0352 3.18441 11.1845 3.63127 11.1845H11.4563C12.3679 11.1846 13.2524 10.8738 13.9635 10.3033C14.6747 9.73287 15.17 8.93693 15.3677 8.04695L16.674 2.16987H17.8729Z"
                            fill="black"
                        />
                    </svg>
                </el-badge>
            </div>
            <!-- account -->
            <div class="icon-option-header account-option-header">
                <img src="../../../assets/images/mini-project/avatar.png" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'header-comp',
    props: {
        listItemNavbar: {
            type: Array,
        },
    },
    components: {
        // SearchChip,
    },
};
</script>

<style lang="scss" scoped>
.header-comp {
    margin: 0;
    padding: 0 10px;
    .navbar-header {
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
            }
        }
    }
    .options-header {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        .icon-option-header {
            margin: 0 0 0 15px;
        }
    }
}
</style>
