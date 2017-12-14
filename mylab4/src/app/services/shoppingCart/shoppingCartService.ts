import { Injectable,PipeTransform,Pipe} from '@angular/core';
import {getDetail} from '../../resources/data/data'
@Injectable()
@Pipe({name: 'calculate'})
export class ShoppingService implements PipeTransform{

    transform(value: string, itemCount:number) {
        let product = getDetail(value);
        return product.price * itemCount;
      }
}