import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting = false;
  submitted = false;
  successMessage = '';
  errorMessage = '';

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      fullname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get f() { return this.contactForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.successMessage = '';
    this.errorMessage = '';

    if (this.contactForm.invalid) {
      return;
    }

    this.isSubmitting = true;

    // Simulate API call - replace with actual service
    setTimeout(() => {
      this.successMessage = 'Message envoyé avec succès!';
      this.contactForm.reset();
      this.submitted = false;
      this.isSubmitting = false;
    }, 1500);
  }
}