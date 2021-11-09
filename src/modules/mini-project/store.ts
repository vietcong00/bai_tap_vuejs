import { getModule, VuexModule, Mutation, Action, Module } from 'vuex-module-decorators';
import store from '@/store';
import { IProduct, ICartItem, IFilterChosenList, ITextItem } from './types';

// import { exampleService } from './services/api.service';

@Module({ dynamic: true, namespaced: true, store, name: 'productStore' })
class ProductStore extends VuexModule {
    count = 0;
    inputSearchHeader = '';
    filterChosenList: IFilterChosenList = {
        category: {
            name: '',
            number: 0,
        },
        price: {
            name: '',
            minPrice: 0,
            maxPrice: 0,
            number: 0,
        },
        color: {
            name: '',
            number: 0,
        },
    };

    filterTagNameList: Array<ITextItem> = [];
    productListPaging: Array<IProduct> = [];
    productListFilter: Array<IProduct> = [];

    productList: Array<IProduct> = [
        {
            id: '0',
            imgLink: require('./../../assets/images/mini-project/product1.png'),
            rate: 3.5,
            reviews: 4,
            category: 'CUSTOM PCS',
            name: 'Test1 MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop',
            oldPrice: 499,
            newPrice: 499,
            statusStock: 'in stock',
            parameter: [
                {
                    option: 'CPU',
                    value: 'N/A',
                },
                {
                    option: 'Featured',
                    value: 'N/A',
                },
                {
                    option: 'I/O Ports',
                    value: 'N/A',
                },
            ],
            colors: ['red', 'yellow'],
            details: [
                'Intel Core i7-10700F',
                'Intel H410',
                'WHITE',
                'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6',
                'SO-DIMM 16GB (16GB x 1) DDR4 2666MHz',
                '2 total slots (64GB Max)',
                '512GB (1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB (2.5) 5400RPM',
                'Gaming Keyboard GK30 + Gaming Mouse GM11',
                '3.5 HDD (0/0), 2.5 HDD/SSD(1/0), M.2 (1/0)',
                'Intel WGI219Vethernet (10/100/1000M)',
                'AX200 (WIFI 6)+BT5.1',
                'PSU 330W',
                'Fan Cooler',
            ],
            images: [
                require('./../../assets/images/mini-project/product0.png'),
                require('./../../assets/images/mini-project/product1.png'),
                require('./../../assets/images/mini-project/product2.png'),
                require('./../../assets/images/mini-project/product3.png'),
            ],
            quantity: 2,
            subtotal: 123,
        },
        {
            id: '1',
            imgLink: require('./../../assets/images/mini-project/product2.png'),
            rate: 4.2,
            reviews: 5,
            category: 'MSI ALL-IN-ONE PCS',
            name: 'Test2 MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop',
            oldPrice: 499,
            newPrice: 499,
            statusStock: 'out stock',
            parameter: [
                {
                    option: 'CPU',
                    value: 'N/A',
                },
                {
                    option: 'Featured',
                    value: 'N/A',
                },
                {
                    option: 'I/O Ports',
                    value: 'N/A',
                },
            ],
            colors: ['green', 'orange'],
            details: [
                'Intel Core i7-10700F',
                'Intel H410',
                'WHITE',
                'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6',
                'SO-DIMM 16GB (16GB x 1) DDR4 2666MHz',
                '2 total slots (64GB Max)',
                '512GB (1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB (2.5) 5400RPM',
                'Gaming Keyboard GK30 + Gaming Mouse GM11',
                '3.5 HDD (0/0), 2.5 HDD/SSD(1/0), M.2 (1/0)',
                'Intel WGI219Vethernet (10/100/1000M)',
                'AX200 (WIFI 6)+BT5.1',
                'PSU 330W',
                'Fan Cooler',
            ],
            images: [
                require('./../../assets/images/mini-project/product0.png'),
                require('./../../assets/images/mini-project/product1.png'),
                require('./../../assets/images/mini-project/product2.png'),
                require('./../../assets/images/mini-project/product3.png'),
            ],
            quantity: 1,
            subtotal: 123,
        },
        {
            id: '2',
            imgLink: require('./../../assets/images/mini-project/product3.png'),
            rate: 2.3,
            reviews: 7,
            category: 'HP/COMPAQ PCS',
            name: 'Test3 MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop',
            oldPrice: 499,
            newPrice: 9999999,
            statusStock: 'in stock',
            parameter: [
                {
                    option: 'CPU',
                    value: 'N/A',
                },
                {
                    option: 'Featured',
                    value: 'N/A',
                },
                {
                    option: 'I/O Ports',
                    value: 'N/A',
                },
            ],
            colors: ['green', 'blue'],
            details: [
                'Intel Core i7-10700F',
                'Intel H410',
                'WHITE',
                'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6',
                'SO-DIMM 16GB (16GB x 1) DDR4 2666MHz',
                '2 total slots (64GB Max)',
                '512GB (1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB (2.5) 5400RPM',
                'Gaming Keyboard GK30 + Gaming Mouse GM11',
                '3.5 HDD (0/0), 2.5 HDD/SSD(1/0), M.2 (1/0)',
                'Intel WGI219Vethernet (10/100/1000M)',
                'AX200 (WIFI 6)+BT5.1',
                'PSU 330W',
                'Fan Cooler',
            ],
            images: [
                require('./../../assets/images/mini-project/product0.png'),
                require('./../../assets/images/mini-project/product1.png'),
                require('./../../assets/images/mini-project/product2.png'),
                require('./../../assets/images/mini-project/product3.png'),
            ],
            quantity: 1,
            subtotal: 123,
        },
        {
            id: '3',
            imgLink: require('./../../assets/images/mini-project/product4.png'),
            rate: 1.2,
            reviews: 8,
            category: 'SKULL D5515AI',
            name: 'Test4 MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop',
            oldPrice: 499,
            newPrice: 10000,
            statusStock: 'out stock',
            parameter: [
                {
                    option: 'CPU',
                    value: 'N/A',
                },
                {
                    option: 'Featured',
                    value: 'N/A',
                },
                {
                    option: 'I/O Ports',
                    value: 'N/A',
                },
            ],
            colors: ['green', 'red'],
            details: [
                'Intel Core i7-10700F',
                'Intel H410',
                'WHITE',
                'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6',
                'SO-DIMM 16GB (16GB x 1) DDR4 2666MHz',
                '2 total slots (64GB Max)',
                '512GB (1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB (2.5) 5400RPM',
                'Gaming Keyboard GK30 + Gaming Mouse GM11',
                '3.5 HDD (0/0), 2.5 HDD/SSD(1/0), M.2 (1/0)',
                'Intel WGI219Vethernet (10/100/1000M)',
                'AX200 (WIFI 6)+BT5.1',
                'PSU 330W',
                'Fan Cooler',
            ],
            images: [
                require('./../../assets/images/mini-project/product0.png'),
                require('./../../assets/images/mini-project/product1.png'),
                require('./../../assets/images/mini-project/product2.png'),
                require('./../../assets/images/mini-project/product3.png'),
            ],
            quantity: 1,
            subtotal: 123,
        },
        {
            id: '4',
            imgLink: require('./../../assets/images/mini-project/product1.png'),
            rate: 2.5,
            reviews: 63,
            category: 'SKULL D5515AI',
            name: 'Test5 MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop',
            oldPrice: 499,
            newPrice: 632,
            statusStock: 'in stock',
            parameter: [
                {
                    option: 'CPU',
                    value: 'N/A',
                },
                {
                    option: 'Featured',
                    value: 'N/A',
                },
                {
                    option: 'I/O Ports',
                    value: 'N/A',
                },
            ],
            colors: ['red', 'violet'],
            details: [
                'Intel Core i7-10700F',
                'Intel H410',
                'WHITE',
                'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6',
                'SO-DIMM 16GB (16GB x 1) DDR4 2666MHz',
                '2 total slots (64GB Max)',
                '512GB (1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB (2.5) 5400RPM',
                'Gaming Keyboard GK30 + Gaming Mouse GM11',
                '3.5 HDD (0/0), 2.5 HDD/SSD(1/0), M.2 (1/0)',
                'Intel WGI219Vethernet (10/100/1000M)',
                'AX200 (WIFI 6)+BT5.1',
                'PSU 330W',
                'Fan Cooler',
            ],
            images: [
                require('./../../assets/images/mini-project/product0.png'),
                require('./../../assets/images/mini-project/product1.png'),
                require('./../../assets/images/mini-project/product2.png'),
                require('./../../assets/images/mini-project/product3.png'),
            ],
            quantity: 1,
            subtotal: 123,
        },
        {
            id: '5',
            imgLink: require('./../../assets/images/mini-project/product4.png'),
            rate: 3.2,
            reviews: 89,
            category: 'SKU D5515AI',
            name: 'Test6 MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop',
            oldPrice: 499,
            newPrice: 125,
            statusStock: 'out stock',
            parameter: [
                {
                    option: 'CPU',
                    value: 'N/A',
                },
                {
                    option: 'Featured',
                    value: 'N/A',
                },
                {
                    option: 'I/O Ports',
                    value: 'N/A',
                },
            ],
            colors: ['black', 'red'],
            details: [
                'Intel Core i7-10700F',
                'Intel H410',
                'WHITE',
                'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6',
                'SO-DIMM 16GB (16GB x 1) DDR4 2666MHz',
                '2 total slots (64GB Max)',
                '512GB (1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB (2.5) 5400RPM',
                'Gaming Keyboard GK30 + Gaming Mouse GM11',
                '3.5 HDD (0/0), 2.5 HDD/SSD(1/0), M.2 (1/0)',
                'Intel WGI219Vethernet (10/100/1000M)',
                'AX200 (WIFI 6)+BT5.1',
                'PSU 330W',
                'Fan Cooler',
            ],
            images: [
                require('./../../assets/images/mini-project/product0.png'),
                require('./../../assets/images/mini-project/product1.png'),
                require('./../../assets/images/mini-project/product2.png'),
                require('./../../assets/images/mini-project/product3.png'),
            ],
            quantity: 1,
            subtotal: 123,
        },
    ];

    cartInfo = new Set();

    get getProductListPaging() {
        return this.productListPaging;
    }

    get getProductListFilter() {
        return this.productListPaging;
    }

    get getProductList() {
        return this.productList;
    }

    get getCartInfo() {
        return this.cartInfo;
    }

    get getInputSearch() {
        return this.inputSearchHeader;
    }

    get getFilterChosenList() {
        return this.filterChosenList;
    }

    get getFilterTagNameList() {
        return this.filterTagNameList;
    }

    @Mutation
    INCREMENT() {
        this.count++;
    }

    @Mutation
    DECREMENT() {
        this.count--;
    }

    @Mutation
    ADD_TO_CART(cartItem: ICartItem) {
        this.cartInfo.add(cartItem.id);
        for (const product of this.productList) {
            if (product.id === cartItem.id) {
                product.quantity = cartItem.quantity || 1;
                break;
            }
        }
    }

    @Mutation
    DELETE_CART(id: string) {
        this.cartInfo.delete(id);
    }

    @Mutation
    CLEAR_CART() {
        this.cartInfo.clear();
    }

    @Mutation
    CHANGE_INPUT_SEARCH(input: string) {
        this.inputSearchHeader = input;
    }

    @Mutation
    UPDATE_PRODUCT_LIST_PAGING(products: Array<IProduct>) {
        this.productListPaging = products;
    }

    @Mutation
    UPDATE_PRODUCT_LIST_FILTER(products: Array<IProduct>) {
        this.productListFilter = products;
    }

    @Mutation
    UPDATE_FILTER_TAG_NAME_LIST(tags: Array<ITextItem>) {
        this.filterTagNameList = tags;
    }

    @Mutation
    UPDATE_FILTER_CHOSEN_LIST(filters: IFilterChosenList) {
        this.filterChosenList = filters;
    }

    @Action
    incrementAfterTime(payload: number) {
        const delay = payload;

        return new Promise<void>((resolve) => {
            window.setTimeout(() => {
                this.INCREMENT();
                resolve();
            }, delay);
        });
    }

    @Action
    getUser() {
        // exampleService.getList({}).then((response) => {
        //     console.log('reponse', response);
        // });
    }

    @Action
    addToCart(cartItem: ICartItem) {
        this.ADD_TO_CART(cartItem);
    }

    @Action
    clearCart() {
        this.CLEAR_CART();
    }

    @Action
    deleteCart(id: string) {
        this.DELETE_CART(id);
    }

    @Action
    changeInputSearch(input: string) {
        this.CHANGE_INPUT_SEARCH(input);
    }

    @Action
    updateProductListPaging(products: Array<IProduct>) {
        this.UPDATE_PRODUCT_LIST_PAGING(products);
    }

    @Action
    updateProductListFilter(products: Array<IProduct>) {
        this.UPDATE_PRODUCT_LIST_FILTER(products);
    }

    @Action
    updateFilterTagNameList(tags: Array<ITextItem>) {
        this.UPDATE_FILTER_TAG_NAME_LIST(tags);
    }

    @Action
    updateFilterChosenList(filters: IFilterChosenList) {
        this.UPDATE_FILTER_CHOSEN_LIST(filters);
    }
}

export const productStore = getModule(ProductStore);
