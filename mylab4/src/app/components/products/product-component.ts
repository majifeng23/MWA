import { products,getDetail } from '../../resources/data/data';
import{Component,EventEmitter,OnInit,Output} from '@angular/core';
import {ProductService} from '../../services/products/productService'

@Component({
    selector: 'app-product',
    templateUrl: '../../views/products/product-app.html',
    providers:[{provide:ProductService,useClass:ProductService}],    
    styles: []
})

export class ProductComponent implements OnInit{
    constructor(private productService: ProductService) {  }
    
    products ;
    dataDetail;
    product;
    isShow:boolean = false;

    async ngOnInit(){
        // this.productService.getAllProducts();
        // this.products = this.productService.getAllProducts().then((products)=> this.products = products);
        this.products = await this.productService.getAllProducts();
        console.log(this.products);
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