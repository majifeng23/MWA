var datas = [
    {
        name:'iPhone',
        price:600,
        description:'this is iphone'
    },
    {
        name:'iPad',
        price:220,
        description:'this is iPad'
    },
    {
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