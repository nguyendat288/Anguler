import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
productForm! : FormGroup
  constructor(private productService : ProductService) { }

  ngOnInit(): void {
 this.productForm = new FormGroup(
   {
     name : new FormControl(),
     price : new FormControl(),
     img : new FormControl(),
     status : new FormControl(true),
   })
  }
saveProduct(){
this.productService.creatProduct(this.productForm.value);
}
}
