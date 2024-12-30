import { CommonModule } from '@angular/common';
import { Component ,OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthenticationService } from '../../Services/authentication.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports:[CommonModule,RouterLink,RouterLinkActive ]
})
export class NavbarComponent implements OnInit {

ShowLinks:Boolean=false;


constructor(private _authService:AuthenticationService ,private _Router:Router) {
  
}


  ngOnInit():void{  
  console.log("navbar");
this._authService.IsLogin.subscribe((data)=>{
this.ShowLinks=data;  
  console.log(data);
})
}




logout()
{
  localStorage.removeItem('token'); // to remove token from local Storage 
  this._Router.navigate(['/login']); // Navigate to login page
  this._authService.IsLogin.next(false); // set IsLogin to false
}


}
