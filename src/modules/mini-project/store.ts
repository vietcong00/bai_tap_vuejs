import { getModule, VuexModule, Mutation, Action, Module } from 'vuex-module-decorators';
import store from '@/store';
import {
    IProduct,
    ICartItem,
    IFilterChosenList,
    ITextItem,
    IPagingItem,
    IGetProducts,
    IFilterOptions,
} from './types';
import { TEXT_ITEM_DEFAULT, PAGE_SIZE_DEFAULT, CURRENT_PAGE_DEFAULT } from './contants';
import { exampleService } from './service/api.service';

// import { exampleService } from './services/api.service';

@Module({ dynamic: true, namespaced: true, store, name: 'productStore' })
class ProductStore extends VuexModule {
    inputSearchHeader = '';
    productList: Array<IProduct> = [];
    productListPaging: Array<IProduct> = [];
    productListFilter: Array<IProduct> = [];
    numberFilter = 0;
    filterTagNameList: Array<ITextItem> = [];

    filterOptions: IFilterOptions = {
        categoryFilters: [],
        colorFilters: [],
        priceFilters: [],
    };

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

    pageSize = PAGE_SIZE_DEFAULT;
    infoPaging: IPagingItem = {
        start: 0,
        end: 0,
        currentPage: PAGE_SIZE_DEFAULT,
    };

    cartInfo = new Set();

    get getInputSearch() {
        return this.inputSearchHeader;
    }

    get getProductList() {
        return this.productList;
    }

    get getProductListFilter() {
        return this.productListFilter;
    }

    get getProductListPaging() {
        return this.productListPaging;
    }

    get geFilterOptions() {
        return this.filterOptions;
    }

    get getPageSize() {
        return this.pageSize;
    }

    get getInfoPaging() {
        return this.infoPaging;
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

    get getCartInfo() {
        return this.cartInfo;
    }

    @Mutation
    CHANGE_INPUT_SEARCH(input: string) {
        this.inputSearchHeader = input;
    }

    @Mutation
    UPDATE_PRODUCTS(data: Array<IProduct>) {
        this.productList = data;
        console.log('update product');
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
    UPDATE_FILTER_OPTIONS(filterOptions: IFilterOptions) {
        this.filterOptions = filterOptions;
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
    async getProducts() {
        const result: IGetProducts = await exampleService.getProducts();
        this.UPDATE_PRODUCTS(result.products);
        this.UPDATE_FILTER_OPTIONS(result.filterOptions);
        this.UPDATE_PRODUCT_LIST_FILTER(result.products);
        this.changePage(CURRENT_PAGE_DEFAULT);
    }

    @Action
    updateProductListFilter(products: Array<IProduct>) {
        this.UPDATE_PRODUCT_LIST_FILTER(products);
    }

    @Action
    updateProductListPaging(payload: { start: number; end: number }) {
        const productListPaging = this.productListFilter.slice(
            payload.start,
            payload.end,
        );
        this.UPDATE_PRODUCT_LIST_PAGING(productListPaging);
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
}

export const productStore = getModule(ProductStore);
