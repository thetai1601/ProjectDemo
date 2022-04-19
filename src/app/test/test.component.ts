import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  userContact!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.userContact = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+$') ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.pattern('[0-9\-\+]{9,15}$'), Validators.minLength(0)]),
    })
  }


  onSubmit() {
    console.warn(this.userContact.value);
  }

  get name() {
    return this.userContact.get('name')
  }

  get email() {
    return this.userContact.get('email')
  }

  get phone() {
    return this.userContact.get('phone')
  }

}
