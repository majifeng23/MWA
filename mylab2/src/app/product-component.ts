import{Component,EventEmitter,OnInit,Output} from '@angular/core';
import {getDetail} from './data';
@Component({
    selector: 'app-product',
    templateUrl: './product-app.html',
    styles: []
})

export class ProductComponent implements OnInit{
    products = ['iPhone','iPad','Apple TV'];
    dataDetail;
    product;
    isShow:boolean = false;
    
    ngOnInit(){
    }
    
    showDetail(p){
        this.isShow = true;
        this.product = p;
        this.dataDetail = getDetail(p);
    }

    onDetailDelete(){
        let productsTmp = [];
        for(let i=0; i < this.products.length; i++){
            if(this.product != this.products[i]){
                productsTmp.push(this.products[i]);
            }
        }
        this.isShow = false;
        this.products = productsTmp;
    }
}