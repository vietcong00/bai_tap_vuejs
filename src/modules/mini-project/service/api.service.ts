import { IGetProducts } from './../types';
import service from '@/plugins/axios';
import { BaseService } from '@/utils/api';

class ExampleService extends BaseService {
    async getProducts(): Promise<IGetProducts> {
        const res = await service.get('/products.json');
        return res.data;
    }
}
export const exampleService = new ExampleService({ baseUrl: '/' }, service);
