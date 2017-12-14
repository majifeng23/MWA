import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ProductFromComponent} from "./product-from.component";
import {ForbiddenValidatorDirective} from "./validators/forbidden-name-validator.directive";
import {PaymentFormComponent} from "./payment-form.component";
import {SignupFormComponent} from "./signup-form.component";
import {TagComponent} from "./tag.component";


@NgModule({
    declarations: [
        AppComponent,
        ProductFromComponent,
        PaymentFormComponent,
        SignupFormComponent,
        TagComponent,
        ForbiddenValidatorDirective
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
