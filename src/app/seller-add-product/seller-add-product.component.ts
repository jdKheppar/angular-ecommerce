import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../data-type';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent {
  constructor(private productService: ProductService){

  }
  submit(data:Product){
    console.warn(data);
    this.productService.addProduct(data).subscribe((result)=>{
      console.log(result);
    });
  }
}
