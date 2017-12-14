import { Component, Input } from '@angular/core';
@Component({
    selector:'shopping-cart',
    templateUrl:'../../views/shoppingCart/shopping-cart.html'
})

export class ShoppingCartComponent{
    @Input() product;
    lastProduct;
    shoppingCount = 0;
    shoppingIphoneCount = 0;
    shoppingIpadCount = 0;
    shoppingAppleTVCount = 0;

    ngOnChanges(){
        switch(this.product){
            case 'iPhone': this.shoppingCount = this.shoppingIphoneCount;break;
            case 'iPad': this.shoppingCount = this.shoppingIpadCount;break;
            case 'Apple TV': this.shoppingCount = this.shoppingAppleTVCount;break;
            // default: this.shoppingCount;
        }
    }

    addItemToCart(){
        switch(this.product){
            case 'iPhone':this.shoppingIphoneCount += 1; break;
            case 'iPad': this.shoppingIpadCount += 1;break;
            case 'Apple TV': this.shoppingAppleTVCount +=1;break;
            // default: this.shoppingCount;
        }

        switch(this.product){
            case 'iPhone': this.shoppingCount = this.shoppingIphoneCount;break;
            case 'iPad': this.shoppingCount = this.shoppingIpadCount;break;
            case 'Apple TV': this.shoppingCount = this.shoppingAppleTVCount;break;
            // default: this.shoppingCount;
        }
        this.lastProduct = this.product;
    }
}