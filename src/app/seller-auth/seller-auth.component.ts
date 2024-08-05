import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { LogIn, SignUp } from '../data-type';
@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {
  showLogin: boolean = false;
  authError: string = '';
  constructor(private seller: SellerService, private router: Router) { }

  ngOnInit(): void { }
  signUp(data: SignUp): void {
    this.seller.userSignUp(data);
  }

  logIn(data: LogIn): void {
    //console.log(data);
    this.seller.userLogIn(data);
    this.seller.isLoginError.subscribe((isError)=>{
      if(isError){
        this.authError = 'Email or Password is Incorrect';
      }
    })
  }
  toggleLogin(){
    this.showLogin = !this.showLogin;
  }
}
