import {Injectable} from '@angular/core';
import {products} from '../../resources/data/data';
@Injectable()
export class ProductService{
    getAllProducts():Promise<string[]>{
        // return products;
        return Promise.resolve(products);
    }

    getProductById(){
        
    }
}