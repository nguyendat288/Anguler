import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../model/product";
import {ProductService} from "../service/product.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
@Input()
products : Product[] = []
  constructor(private productservice : ProductService) {
    this.products = productservice.products;
  }


  ngOnInit(): void {
  }

}
