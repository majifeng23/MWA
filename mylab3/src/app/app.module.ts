import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {Router} from '@angular/router';
import { AppComponent } from './components/app.component';
import {ProductComponent} from './components/product-component';
import {ProductDetailComponent} from './components/product-detail-component';
// import { AppRoutingModule }from './app-routing.moudle';

@NgModule({
  imports: [
    BrowserModule,
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
