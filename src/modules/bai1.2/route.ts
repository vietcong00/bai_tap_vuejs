import { RouteRecordRaw } from 'vue-router';
import ExerciseTwo from './pages/ExerciseTwo.vue';

export default [
    {
        path: '/bai1.2',
        name: 'bai1.2',
        component: ExerciseTwo,
        meta: {
            public: true,
        },
    },
] as RouteRecordRaw[];
