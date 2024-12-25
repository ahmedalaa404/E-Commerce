import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./Component/navbar/navbar.component";
import { RegisterComponent } from "./Component/register/register.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, RegisterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'E-Commerce';
}
