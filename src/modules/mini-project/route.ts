import { RouteRecordRaw } from 'vue-router';
import MiniProject from './pages/MiniProject.vue';
import Catalog from './components/Catalog.vue';
import InformationProduct from './components/InformationProduct.vue';
import ShoppingCart from './components/ShoppingCart.vue';

export default [
    {
        path: '/mini-project',
        name: 'mini-project',
        component: MiniProject,
        meta: {
            public: true,
        },
        children: [
            {
                path: 'catalog',
                name: 'catalog',
                component: Catalog,
                meta: {
                    public: true,
                },
            },
            {
                path: 'information/:id',
                name: 'information',
                component: InformationProduct,
                meta: {
                    public: true,
                },
            },
            {
                path: 'shopping-cart',
                name: 'shopping-cart',
                component: ShoppingCart,
                meta: {
                    public: true,
                },
            },
        ],
    },
] as RouteRecordRaw[];
