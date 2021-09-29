import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  productForm! : FormGroup
  name! : string;
  constructor(private productService : ProductService,private activeRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.productForm = new FormGroup(
      {
        name : new FormControl(),
        price : new FormControl(),
        img : new FormControl(),
        status : new FormControl(true),
      })
this.activeRoute.params.subscribe((data ) => this.name = data.name)
    this.showEditProduct();
  }
  editProduct(){
    this.productService.editProduct(this.productForm.value);
  }
  showEditProduct(){
   let p = this.productService.showEdit(this.name);
   this.productForm.get('name')?.setValue(p?.name)
   this.productForm.get('price')?.setValue(p?.price)
   this.productForm.get('img')?.setValue(p?.img)
   this.productForm.get('status')?.setValue(p?.status)
  }
}
