import {Component} from "@angular/core";

@Component({
    selector:'product-form',
    templateUrl:'./product-form.component.html'
})
export class ProductFromComponent{
    log(model) {
        console.log(model);
    }
    submit(form){
        console.log(form);
    }
}