import {
  afterNextRender,
  afterRender,
  Component,
  Inject,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { AuthenticationService } from '../../Services/authentication.service';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  IsLoading: boolean = false;
  backendMessage: string | null = null;
  loginform = new FormGroup({
    email: new FormControl(null, { validators: [Validators.required] }),
    password: new FormControl(null, { validators: [Validators.required] }),
  });

  ngOnInit(): void {
    if (typeof localStorage !== undefined) {
      // console.log(localSto rage);
    }
  }
  /**
   *
   */
  constructor(
    private _AuthenticationService: AuthenticationService,
    @Inject(PLATFORM_ID) private platofrm: object,
    private _Router: Router
  ) {
    console.log('constructor');
    // console.log(platofrm);

    if (isPlatformBrowser(this.platofrm)) {
      console.log('browser');
    }
    if (isPlatformServer(this.platofrm)) {
    }
    // afterRender(()=>{
    //   console.log("after next render");

    // })

    // afterNextRender(()=>{
    //   console.log("after next render");
    // })
  }

  onSubmit(event: FormGroup) {
    this.IsLoading = true;
    return this._AuthenticationService.SignIn(event.value).subscribe({
      next: (responceSuccess) => {
        console.log(responceSuccess.token);
        this.backendMessage = responceSuccess.message;
        localStorage.setItem('token', responceSuccess.token);
        let token = responceSuccess.token;
        let DecodeToken= jwtDecode(token);
        console.log(DecodeToken);
        // because now have event in this Method soo use 
        // to save the token in local storage not use afterrendernext  or afterrender pr if typeof localstorage !== undefined 
        this._AuthenticationService.IsLogin.next(true);
        this._Router.navigate(['/home']);
      },
      error: (responceError) => {
        console.log(responceError);
        this.backendMessage = responceError.error.message;
      },
      complete: () => {
        console.log('complete');
        this.IsLoading = false;
      },
    });
  }
}
