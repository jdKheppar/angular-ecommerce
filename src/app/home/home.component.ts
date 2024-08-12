import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../data-type';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  popularProducts : undefined | Product[];
  trendingProducts : undefined | Product[];
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  constructor(private productService: ProductService){

  }

  ngOnInit(): void{
    this.productService.popularProducts().subscribe((data)=>{
      this.popularProducts = data;
    });
    this.productService.trendingProducts().subscribe((data)=>{
      this.trendingProducts = data;
    })
  }
}
