import { EventEmitter, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { LogIn, SignUp } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class SellerService {
  isSellerLoggedIn = new BehaviorSubject<boolean>(false);
  isLoginError = new EventEmitter<boolean>(false);
  constructor(private http: HttpClient, private router: Router) { }
  userSignUp(data: SignUp){
    return this.http.post('http://localhost:3000/seller',data,{observe:'response'}).subscribe((
      result) => {
      if(result){
        console.log("User Signed Up", result);
        this.isSellerLoggedIn.next(true);
        localStorage.setItem('seller',JSON.stringify(result.body))
        this.router.navigate(['seller-home']);
      }
      
    }
    ,
      (error) => {
        console.error("Signup failed", error);
      }
    );
  }

  userLogIn(data: LogIn){
    return this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`).subscribe((
      result: any) => {
      
      if( result && result.length){//we are able to get the result.length because of data type any
        
        localStorage.setItem('seller',JSON.stringify(result))
        this.router.navigate(['seller-home']);
      }
      else{
        console.log("Logged In Failed");
        this.isLoginError.emit(true);
      }
      
    }
    ,
      (error) => {
        console.error("Signup failed", error);
        this.isLoginError.emit(true);
      }
    );
  }
  
}
