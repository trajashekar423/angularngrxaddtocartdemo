export interface Product {
  
  
    quantity: number;
    id: number;   
    price: number;
    title:string;
    description:string;
    category:string;
    image:string;
    rating: Rating;
  
  }

  export interface Rating {
   rate:number;
   count:number;
  }

  export interface CartItem {
    productId: number;
    quantity: number;
  }