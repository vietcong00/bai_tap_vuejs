import { RouteRecordRaw } from 'vue-router';
import MiniProject from './pages/MiniProject.vue';

export default [
    {
        path: '/mini-project',
        name: 'mini-project',
        component: MiniProject,
        meta: {
            public: true,
        },
    },
] as RouteRecordRaw[];
