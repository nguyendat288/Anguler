import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { Account } from '../model/account';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  accountFormGroup! :FormGroup;
@Input()
account : Account[]=[];

  constructor() { }
  @Output() deleteAccountEmit = new EventEmitter<string>();
  @Output() createAccountEmit = new EventEmitter<Account>();
  @Output() editAccountEmit = new EventEmitter<Account>();
  ngOnInit(): void {
    this.accountFormGroup = new FormGroup({
      username: new FormControl('', Validators.minLength(6)),
      password: new FormControl('', Validators.minLength(5)),
      img: new FormControl('', Validators.required),
      email: new FormControl(0, Validators.min(0)),
      address: new FormControl(0, Validators.min(0)),

    })

  }
  deleteAccount(username : string){
    this.deleteAccountEmit.emit(username);
  }
  createAccount() {
    this.createAccountEmit.emit(this.accountFormGroup.value);
    this.accountFormGroup.reset();
  }
  showEdit(username : string){
    for(let i=0 ;i<this.account.length;i++){
      if(this.account[i].username===username){
        this.accountFormGroup.get('username')?.setValue(this.account[i].username);
        this.accountFormGroup.get('password')?.setValue(this.account[i].password);
        this.accountFormGroup.get('img')?.setValue(this.account[i].img);
        this.accountFormGroup.get('email')?.setValue(this.account[i].email);
        this.accountFormGroup.get('address')?.setValue(this.account[i].address);
        return;
      }
    }
  }

  editAccount(){
    this.editAccountEmit.emit(this.accountFormGroup.value);
    this.accountFormGroup.reset();
  }

}
