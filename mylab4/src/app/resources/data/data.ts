var datas = [
    {
        productId:'001',
        name:'iPhone',
        price:600,
        description:'this is iphone'
    },
    {
        productId:'002',
        name:'iPad',
        price:220,
        description:'this is iPad'
    },
    {
        productId:'003',
        name:'Apple TV',
        price:220,
        description:'this is Apple TV'
    }
];

export function getDetail(name:string){
    
    for(let data of datas){
        if(data.name == name){
            return data;
        }
    }

    return null;
}
export const products = ['iPhone','iPad','Apple TV'];