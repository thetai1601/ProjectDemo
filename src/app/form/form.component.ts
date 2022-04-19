import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Product, Products } from 'data.product';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
    
  }


  products: Product[] = Products;




  // userContact!: FormGroup;

  // ngOnInit(): void {
  //   this.userContact = new FormGroup({
  //     contactName: new FormControl('',[Validators.required, Validators.minLength(3)]),
  //     email: new FormControl(),
  //     social: new FormGroup({
  //       facebook: new FormControl(),
  //       instagram: new FormControl(),
  //       website: new FormControl()
  //     }),
  //     tel: new FormControl()
  //   });
  // }


  // onSubmit() {
  //   console.log(JSON.stringify(this.userContact));
    
  // }
  
  // user: any = {
  //   firstName: '',
  //   password: ''
  // }

  // handleSubmitForm() {
  //   console.log(JSON.stringify(this.user));
  // }
  
}