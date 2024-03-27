import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Service/product-service.service';
import { ProductInterface } from '../Model/product-interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {


  productData: ProductInterface[] = [];
  isLoaded: boolean = false;

  constructor(private service: ProductService, private router: Router) { }


    ngOnInit() {
      //this.service.getProductData().subscribe(data => {
      //  this.productData = data;
      //  console.log(this.productData);
      //  this.isLoaded = true;
      //});
    }

  addProductPage() {
    console.log("we're in here");
    this.router.navigate(['/addProduct']);
  }

}

