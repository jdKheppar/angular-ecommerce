import { Component } from '@angular/core';
import { Product } from '../data-type';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchResult:undefined|Product[];
  constructor(private activeRoute: ActivatedRoute, private product:ProductService) { }
  

  ngOnInit(): void {
    let query = this.activeRoute.snapshot.paramMap.get('query');
    console.warn(query);
    query && this.product.searchProducts(query).subscribe((result)=>{
      this.searchResult=result;
      
    });
  }

}
