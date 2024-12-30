import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { RegisterData } from '../interfaces/register-data';
import { UserLoign } from '../interfaces/user-loign';
import { BehaviorSubject, Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { jwtDecode } from 'jwt-decode';
interface DecodedToken {
  name: string;  // Assume 'name' is a string. Add other properties as needed.
  // Add other properties of the decoded token here
}
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {


  IsLogin:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false);

  UserName:string="";

  constructor(private _httpClient:HttpClient,@Inject(PLATFORM_ID) private platformId: Object) {
    
        if(isPlatformBrowser(this.platformId))
        {
          const token = localStorage.getItem('token');
          if (token) {
            this.IsLogin.next(true);
            let decodedToken :any= jwtDecode(token);
            this.UserName=decodedToken.name;  // Accessing 'name' with dot notation
            
      
          } else {
            this.IsLogin.next(false);
          }
        }

  }

  BaseUrl:string="https://ecommerce.routemisr.com";

SignUp(UserRegister: RegisterData):Observable<any>
{

  return this._httpClient.post("https://ecommerce.routemisr.com/api/v1/auth/signup",UserRegister)
}








SignIn(UserLoign: UserLoign):Observable<any>
{

  return this._httpClient.post("https://ecommerce.routemisr.com/api/v1/auth/signin",UserLoign)
}









}
