import {Routes} from '@angular/router';
import  ProductList from './features/product-list/product-list';
import  ProductDetail  from './features/product-details/product-details';

const productRoutes: Routes = [
  {
    path: '',
    component: ProductList,
  },
  {
    path: ':id',
    component: ProductDetail,
  },
];  

export default productRoutes;