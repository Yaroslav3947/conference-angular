import { Component, OnInit } from '@angular/core';
import { ContactUsRequest } from '../models/contact-us-request';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {

  model: ContactUsRequest;

  constructor() {
    this.model = {
      name: '',
      email: '',
      comment: ''
    }
  }


  onFormSubmit() {
    console.log(this.model)
  }
}
