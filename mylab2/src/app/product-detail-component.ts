import {Component,Input,Output,EventEmitter,OnInit} from '@angular/core';
// import { ActivatedRoute,Router} from '@angular/router';
// import {getDetail} from './data';
@Component ({
    selector:'product-detail',
    templateUrl:'./product-detail.html'
})
export class ProductDetailComponent {
    @Input() product;
    @Output() onDelete = new EventEmitter();
    dataDetail;
    
    // ngOnInit(){
    //     // this.dataDetail = this.product;
    // }
    ngOnChanges(){
        this.dataDetail = this.product;
    }

    deleteDetail() {
        this.onDelete.emit(this.product);
      }
}

// export class ProductDetailComponent implements OnInit{

//     constructor(private router:Router, private routerIonfo:ActivatedRoute){

//     }

//     dataDetail;
//     name:string;
//     ngOnInit(){
//         this.routerIonfo.params.subscribe(params=>{
//             this.name = params['product'];
//             this.dataDetail =  getDetail(this.name);
//             return this.dataDetail ;
//         });
//     }

//     delete(name:string){
//         console.log('name:'+name);
//         let aa = new EventEmitter();
//         aa.emit('event'),{name:'23'};
//     }
    
// }