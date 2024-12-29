import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterData } from '../interfaces/register-data';
import { UserLoign } from '../interfaces/user-loign';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {


  IsLogin:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false);



  constructor(private _httpClient:HttpClient) { }

  BaseUrl:string="https://ecommerce.routemisr.com";

SignUp(UserRegister: RegisterData):Observable<any>
{

  return this._httpClient.post("https://ecommerce.routemisr.com/api/v1/auth/signup",UserRegister)
}








SignIn(UserLoign: UserLoign):Observable<any>
{

  return this._httpClient.post("https://ecommerce.routemisr.com/api/v1/auth/signin",UserLoign)
}



// SignOut():Observable<any>
// {
//     localStorage.removeItem("token");
//     this.IsLogin.next(false);


// }







}
