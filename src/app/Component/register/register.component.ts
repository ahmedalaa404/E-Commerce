import { Component } from '@angular/core';

import {FormControl, ReactiveFormsModule,FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms'
import {AuthenticationService} from '../../Services/authentication.service'
import { Router } from '@angular/router';









@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',

})
export class RegisterComponent {

  
  BackendMessage:string="";


  // form Group = ===  > form 
// form Control== Input

loading=false;

RegisterForm = new FormGroup(
  {
    name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(25),
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(6),
    ]),
    rePassword: new FormControl(null, [
      Validators.required,
      Validators.minLength(6),
    ]),
    phone: new FormControl(null, [
      Validators.required,
      Validators.pattern('^(010|011|012|015)\\d{8}$'),
    ]),
  },
  this.ConfirmationPassword// Bind `this` to access the class context
);

// Custom Validation Function
ConfirmationPassword(group: AbstractControl): ValidationErrors | null {
  const password = group.get('password')?.value;
  const rePassword = group.get('rePassword')?.value;

  if (password !== rePassword) {
    return { NotMatch: true };
  }
  return null;
}






constructor(public _authentication:AuthenticationService, private _Router:Router) {

  
}



Register(event:FormGroup)
{
  this.loading=true;
  if(event.valid)
  {
    this._authentication.SignUp(event.value).subscribe({
      next:(suceess)=>{
        this.BackendMessage=suceess.message;
        this._Router.navigate(["/login"]);
      },
      error:(error)=>{
        console.error(error);
        this.BackendMessage=error.error.message ;
      },
      complete:()=>{  
        console.log(event.value);
        this.loading=false;
      }


    })
  }
  console.log(event)
}









}
