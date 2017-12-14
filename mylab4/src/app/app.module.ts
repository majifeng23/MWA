import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {Router} from '@angular/router';
import { AppComponent } from './components/products/app.component';
import {ProductComponent} from './components/products/product-component';
import {ProductDetailComponent} from './components/products/product-detail-component';
import {ShoppingCartModule} from './modules/shopping-cart.module';
// import { AppRoutingModule }from './app-routing.moudle';

@NgModule({
  imports: [
    BrowserModule,
    ShoppingCartModule
    // AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    ProductComponent,
    ProductDetailComponent,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  //  constructor(router:Router){
  //    console.log(JSON.stringify(router.config));
  //  }
}
