import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-communications',
  templateUrl: './communications.component.html',
  styleUrls: ['./communications.component.scss']
})
export class CommunicationsComponent implements OnInit {

  userContact!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.userContact = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+$') ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.pattern('[0-9\-\+]{9,15}$'), Validators.minLength(9)]),
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
