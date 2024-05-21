import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, NgForm, ValidationErrors, Validators } from '@angular/forms';
import { asyncurlValidator, emailValidator, rangeValidator } from './custom-validators';
import { Users } from './user';
import { FORM_ERRORS, FORM_LABELS, FORM_PLACEHOLDERS, FORM_SUCCESS, ROLES, VALIDATION_MESSAGES } from './form-data';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  userForm!: FormGroup
  formLabels: any = FORM_LABELS
  formPlaceholders: any = FORM_PLACEHOLDERS
  formSuccess: any = FORM_SUCCESS
  formErrors: any = FORM_ERRORS
  validationMessages: any = VALIDATION_MESSAGES
  roles: string[] = ROLES

  private user: Users = new Users(null, null, null, null, null, null, null)

  constructor(private fb: FormBuilder) { }

  get form(): { [key: string]: AbstractControl; } {
    return this.userForm.controls
  }

  ngOnInit(): void {
    this.buildForm()
  }

  onSubmit(): void {
    console.log('Form submitted')
    console.log(this.userForm.value)
  }

  private buildForm(): void {
    this.userForm = this.fb.group({
      name: [this.user.name, [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
      password: [this.user.password, [Validators.required, Validators.minLength(7), Validators.maxLength(25)]],
      email: [this.user.email, [Validators.required, emailValidator]],
      age: [this.user.age, [Validators.required, rangeValidator(1, 122)]],
      site: [this.user.site, [Validators.required], [asyncurlValidator]],
      role: [this.user.role, [Validators.required]]
    })
    this.userForm.valueChanges?.subscribe(() => this.onValueChanged())
  }

  onValueChanged(): void {
    const form = this.userForm

    Object.keys(this.formErrors).forEach(field => {
      this.formErrors[field] = ''
      const control = form.get(field)

      if ((control?.dirty || control?.touched) && control?.invalid) {
        const messages = this.validationMessages[field]

        Object.keys(control.errors as ValidationErrors).some(key => { this.formErrors[field] = messages[key] })
      }
    })
  }
}



