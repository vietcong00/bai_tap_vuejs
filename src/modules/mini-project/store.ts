import { getModule, VuexModule, Mutation, Action, Module } from 'vuex-module-decorators';
import store from '@/store';
// import { exampleService } from './services/api.service';

@Module({ dynamic: true, namespaced: true, store, name: 'productStore' })
class ProductStore extends VuexModule {
    count = 0;

    ProductList = [
        {
            id: '0',
            imgLink: require('./../../assets/images/mini-project/product1.png'),
            rate: 3.5,
            reviews: 4,
            category: 'CUSTOM PCS',
            color: 'red',
            name: 'MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop',
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
            colors: ['green', 'black', 'red', 'blue'],
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
        },
        {
            id: '1',
            imgLink: require('./../../assets/images/mini-project/product2.png'),
            rate: 4.2,
            reviews: 5,
            category: 'MSI ALL-IN-ONE PCS',
            color: 'black',
            name: 'MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop',
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
            colors: ['green', 'black', 'red', 'blue'],
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
        },
        {
            id: '2',
            imgLink: require('./../../assets/images/mini-project/product3.png'),
            rate: 2.3,
            reviews: 7,
            category: 'HP/COMPAQ PCS',
            color: 'blue',
            name: 'MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop',
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
            colors: ['green', 'black', 'red', 'blue'],
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
        },
        {
            id: '3',
            imgLink: require('./../../assets/images/mini-project/product4.png'),
            rate: 1.2,
            reviews: 8,
            category: 'SKU D5515AI',
            color: 'green',
            name: 'MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop',
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
            colors: ['green', 'black', 'red', 'blue'],
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
        },
    ];

    productCart = [];

    get getProductList() {
        return this.ProductList;
    }

    @Mutation
    INCREMENT() {
        this.count++;
    }

    @Mutation
    DECREMENT() {
        this.count--;
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
}

export const productStore = getModule(ProductStore);
