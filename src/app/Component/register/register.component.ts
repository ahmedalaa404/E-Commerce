import { Component } from '@angular/core';

import {FormControl, ReactiveFormsModule,FormGroup, Validators} from '@angular/forms'
@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

// form Group = ===  > form 


// form Control== Input

  RegisterForm=new FormGroup({
    name: new FormControl
    (null,[Validators.required,Validators.minLength(3),Validators.maxLength(25)]),
  
  
    email: new FormControl(null,[Validators.required,Validators.email]),
   
    password: new FormControl(null,[Validators.required,Validators.minLength(6)]),
   
    rePassword: new FormControl(null,[Validators.required,Validators.minLength(6)]),
   
    phone: new FormControl(null,[Validators.required,Validators.pattern('^(010|011|012|015)\d{8}$')]),
  },this.ConfirmationPassword)



ConfirmationPassword()
{
  const password = this.RegisterForm.get('password')?.value;
  const rePassword = this.RegisterForm.get('rePassword')?.value;
  if(password!==rePassword){
   { confirmPasswordMismatch: true};

  }else {
   null
  }

}




}
