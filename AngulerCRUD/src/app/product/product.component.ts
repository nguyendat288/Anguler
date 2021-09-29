import {Component, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { Product } from '../model/product';
import {ProductService} from "../service/product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productFormGroup!: FormGroup
  products: Product[] = [];

  constructor(private productservice: ProductService) {
    this.products = productservice.products;
  }


  ngOnInit(): void {
    this.productFormGroup = new FormGroup({
      name: new FormControl('', Validators.minLength(6)),
      img: new FormControl('', Validators.required),
      price: new FormControl(0, Validators.min(0)),
      status: new FormControl(true),
    })
  }

  deleteProduct(name: string) {
    this.productservice.deleteProduct(name);
  }

  createProduct() {
    this.productservice.creatProduct(this.productFormGroup.value);
    this.productFormGroup.get('status')?.setValue(true);
  }

  editProduct(){
   this.productservice.editProduct(this.productFormGroup.value);
    this.productFormGroup.get('status')?.setValue(true);

  }

}
