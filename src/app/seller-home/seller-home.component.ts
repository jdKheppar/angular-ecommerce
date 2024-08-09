import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../data-type';
@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent {
  productListArr: undefined | Product[];
  productMessage: undefined | string;
  constructor(private productService: ProductService) { }
  fetchProducts(){
    this.productService.productList().subscribe((data)=>{
      
      this.productListArr = data;
    })
  }
  ngOnInit(): void{
    this.fetchProducts();
  }
  deleteProduct(id: number){
    this.productService.deleteProduct(id).subscribe((result)=>{
      if(result){
        this.productMessage="Product deleted sucessfully";
        this.fetchProducts();
      }
    });
    setTimeout(()=>{
      this.productMessage = undefined;
    }, 3000);
  } 
}
