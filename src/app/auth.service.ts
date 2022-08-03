// import { AuthService } from './auth.service';
import  Keycloak  from 'keycloak-js';
import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { DashboardComponent } from './dashboard/dashboard.component'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  KeycloakInstance:any; 
 static k:any; 
  constructor() {}
  login(){
    
    this.KeycloakInstance.login();
    console.log(this.KeycloakInstance);
    DashboardComponent.k=this.KeycloakInstance;
    AuthService.k=this.KeycloakInstance;
    DashboardComponent.fnc(this.KeycloakInstance);
  }
   
}


