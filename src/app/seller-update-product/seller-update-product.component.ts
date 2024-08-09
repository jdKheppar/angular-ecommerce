import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../data-type';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent {
  updateMessage : undefined|string;
  productObj : Product | undefined ;
ngOnInit(): void{
  let productId = this.route.snapshot.paramMap.get('id');
  productId && this.productService.getProduct(productId).subscribe((data: Product) => {
  this.productObj = data;
  console.log(this.productObj);
  });

}
constructor(private route: ActivatedRoute, private productService: ProductService){

}
submit(data: Product)
{
  if(this.productObj){
    data.id = this.productObj.id;
  }
  this.productService.updateProduct(data).subscribe((result)=>{
    if(result){
      this.updateMessage = "Product updated successfully";
    }
  });

  setTimeout(()=>{
    this.updateMessage = undefined;
  },3000);

}
}
