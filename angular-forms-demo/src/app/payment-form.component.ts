import {Component} from "@angular/core";

@Component({
    selector: 'payment-form',
    templateUrl: './payment-form.component.html'
})
export class PaymentFormComponent{
    
    submit(obj){
        console.log(obj.value);
    }
}