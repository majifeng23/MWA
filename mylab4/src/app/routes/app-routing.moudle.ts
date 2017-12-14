import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {ProductDetailComponent} from '../components/products/product-detail-component'
import { AppComponent } from '../components/products/app.component';
const appRoutes:Routes = [
    {
        path:'home',component:AppComponent,
    },
    {path:':detail',component:ProductDetailComponent},
];
@NgModule({
    imports:[
        RouterModule.forRoot(
            appRoutes,
            {
                enableTracing: true, // <-- debugging purposes only
            }
        )
    ],
    exports:[RouterModule]
})
export class AppRoutingModule{}