import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterData } from '../interfaces/register-data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {

  constructor(private _httpClient:HttpClient) { }

  BaseUrl:string="https://ecommerce.routemisr.com";

SignUp(UserRegister: RegisterData):Observable<any>
{

  return this._httpClient.post("https://ecommerce.routemisr.com/api/v1/auth/signup",UserRegister)
}


}
