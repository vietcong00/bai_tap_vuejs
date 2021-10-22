import { RouteRecordRaw } from 'vue-router';
import ExerciseOne from './pages/ExerciseOne.vue';

export default [
    {
        path: '/bai1.1',
        name: 'bai1.1',
        component: ExerciseOne,
        meta: {
            public: true,
        },
    },
] as RouteRecordRaw[];
