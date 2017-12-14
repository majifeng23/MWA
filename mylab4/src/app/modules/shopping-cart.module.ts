import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import {ShoppingCartComponent} from '../components/shoppingCart/shopping-cart.component';
import {ShoppingService} from '../pipe/pipe';
@NgModule({
  imports:      [ CommonModule, FormsModule ],
  declarations: [ShoppingCartComponent,ShoppingService],
  exports:      [ShoppingCartComponent],
  providers:    []
})
export class ShoppingCartModule { }