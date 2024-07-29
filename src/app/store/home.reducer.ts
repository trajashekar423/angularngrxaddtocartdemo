import { createReducer } from '@ngrx/store';


export interface HeroBanner {
        title:string;
        completed:boolean;
        userId:number;
        id:number;
};

export interface HeroHomeBanner {
id: any;
  banners:string;
  bannersDec:string;
};

const initialState: HeroBanner []= [
    {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
      },
      {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
      },
      {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
      },
      {
        "userId": 1,
        "id": 4,
        "title": "et porro tempora",
        "completed": true
      },
];

const initialState1: HeroHomeBanner[] = [
  {
    id:"1" ,
    banners: "My First Angular with NGRX E-commerce Project Demo",
      bannersDec: 'Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.'
  },
  
];

export const HeroBannerReducer = createReducer(
    initialState,
    
   
);


export const HeroHomeBanner = createReducer(
  initialState1,
  
 
);