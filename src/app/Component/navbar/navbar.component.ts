import { CommonModule } from '@angular/common';
import { Component ,OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthenticationService } from '../../Services/authentication.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports:[CommonModule,RouterLink,RouterLinkActive ]
})
export class NavbarComponent implements OnInit {

ShowLinks:Boolean=false;
constructor(private _authService:AuthenticationService) {
  
}


  ngOnInit():void{  
  console.log("navbar");
this._authService.IsLogin.subscribe((data)=>{
this.ShowLinks=data;  
  console.log(data);
})
}



}
