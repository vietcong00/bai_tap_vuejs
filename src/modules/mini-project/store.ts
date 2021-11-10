import { getModule, VuexModule, Mutation, Action, Module } from 'vuex-module-decorators';
import store from '@/store';
import { IProduct, ICartItem, IFilterChosenList, ITextItem, IPagingItem } from './types';
import { TEXT_ITEM_DEFAULT, PAGE_SIZE_DEFAULT, CURRENT_PAGE_DEFAULT } from './contants';

// import { exampleService } from './services/api.service';

@Module({ dynamic: true, namespaced: true, store, name: 'productStore' })
class ProductStore extends VuexModule {
    count = 0;
    inputSearchHeader = '';
    numberFilter = 0;
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

    pageSize = PAGE_SIZE_DEFAULT;
    infoPaging: IPagingItem = {
        start: 0,
        end: 0,
        currentPage: PAGE_SIZE_DEFAULT,
    };

    get getPageSize() {
        return this.pageSize;
    }

    get getInfoPaging() {
        return this.infoPaging;
    }

    get getProductListPaging() {
        return this.productListPaging;
    }

    get getProductListFilter() {
        return this.productListFilter;
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

    get getNumberFilter() {
        return this.numberFilter;
    }

    @Mutation
    UPDATE_INFO_PAGING(info: IPagingItem) {
        this.infoPaging = info;
    }

    @Mutation
    UPDATE_PAGESIZE(pageSize: number) {
        this.pageSize = pageSize;
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

    @Mutation
    CHANGE_NUMBER_FILTER(number: number) {
        this.numberFilter += number;
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

    @Action
    changeNumberFilter(number: number) {
        this.CHANGE_NUMBER_FILTER(number);
    }

    @Action
    filter() {
        const productListFilter = this.getProductList.filter((product) => {
            if (
                this.filterChosenList.category.name !== '' &&
                product.category !== this.filterChosenList.category.name
            ) {
                return false;
            }
            if (
                this.filterChosenList.color.name !== '' &&
                product.colors.indexOf(this.filterChosenList.color.name) < 0
            ) {
                return false;
            }
            if (
                this.filterChosenList.price.name !== '' &&
                (product.newPrice <= this.filterChosenList.price.minPrice ||
                    product.newPrice >= this.filterChosenList.price.maxPrice)
            ) {
                return false;
            }
            return true;
        });

        this.UPDATE_PRODUCT_LIST_FILTER(productListFilter);
        this.changePage(CURRENT_PAGE_DEFAULT);
        this.CHANGE_INPUT_SEARCH('');
    }

    @Action
    deleteFilterTagName(tagIndex: { tagName: string; index: number }): void {
        const tagNames = this.filterTagNameList;
        tagNames.splice(tagIndex.index, 1);
        this.UPDATE_FILTER_TAG_NAME_LIST(tagNames);
        const filterChosenList = this.getFilterChosenList;
        for (const key in filterChosenList) {
            if (filterChosenList[key].name === tagIndex.tagName) {
                filterChosenList[key] = TEXT_ITEM_DEFAULT;
                break;
            }
        }
        this.UPDATE_FILTER_CHOSEN_LIST(filterChosenList);
        this.filter();
    }

    @Action
    searchProduct(inputSearch: string) {
        this.CHANGE_INPUT_SEARCH(inputSearch);
        const productListFilter: Array<IProduct> = [];
        this.productList.forEach((element) => {
            if (element.name.toLowerCase().indexOf(inputSearch.toLowerCase()) >= 0) {
                productListFilter.push(element);
            }
        });
        this.UPDATE_PRODUCT_LIST_FILTER(productListFilter);
        this.changePage(CURRENT_PAGE_DEFAULT);
    }

    @Action
    updatePageSize(pageSize: number) {
        this.UPDATE_PAGESIZE(pageSize);
        this.changePage(CURRENT_PAGE_DEFAULT);
    }

    @Action
    changePage(currentPage: number) {
        const sizeList = this.getProductListFilter.length;
        let numberProductInPageStart = (currentPage - 1) * this.pageSize + 1;
        numberProductInPageStart =
            numberProductInPageStart > sizeList ? sizeList : numberProductInPageStart;
        let numberProductInPageEnd = numberProductInPageStart + this.pageSize - 1;
        numberProductInPageEnd =
            numberProductInPageEnd > sizeList ? sizeList : numberProductInPageEnd;
        this.UPDATE_INFO_PAGING({
            start: numberProductInPageStart,
            end: numberProductInPageEnd,
            currentPage: currentPage,
        });
        this.updateProductListPaging({
            start: this.infoPaging.start - 1,
            end: this.infoPaging.end,
        });
    }

    @Action
    updateProductListPaging(payload: { start: number; end: number }) {
        const productListPaging = this.productListFilter.slice(
            payload.start,
            payload.end,
        );
        this.UPDATE_PRODUCT_LIST_PAGING(productListPaging);
    }
}

export const productStore = getModule(ProductStore);
