import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { ContactService } from './contact.service';

const MESSAGE = "Thank you for your message!";
const ACTION = "Ok";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSnackBarModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  
  contactForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl('')
  });

  constructor(private contactService: ContactService, private _snackBar: MatSnackBar){}

  private resetForm(){
    this.contactForm.setValue({
      name: '',
      email: '',
      message: ''
    });
  }

  submitContactForm(){
    this.contactService.sendMessage(
      this.contactForm.value.name ?? '',
      this.contactForm.value.email ?? '',
      this.contactForm.value.message ?? ''
    );

    this.resetForm();
    this._snackBar.open(MESSAGE, ACTION);
  }
}
