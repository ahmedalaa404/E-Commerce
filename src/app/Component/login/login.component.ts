import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {



loginform=new FormGroup({

  Email:new FormControl(null,{validators:[Validators.required]}),
  Password:new FormControl(null,{validators:[Validators.required]}),

})











}
