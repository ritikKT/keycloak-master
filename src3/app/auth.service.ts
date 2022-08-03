// import { AuthService } from './auth.service';
import  Keycloak  from 'keycloak-js';
import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  KeycloakInstance:any;
 // keyc:Keycloak; 
 constructor( ) {

  // this.keyc=keyc;
 }
 login(){
   this.KeycloakInstance.login();

  // this.signin();
 }
//   signin():void
//   {
//    var v=this.keyc.createLoginUrl({
//      idpHint: 'google'
// });
// console.log(v);
//   }
}
