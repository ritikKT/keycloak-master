import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import  Keycloak  from "keycloak-js";
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  public userObject :any;
  public tokens:any;
  public refreshTokens:any;
  interval:any;
  timeLeft:any;
  static k:Keycloak;
  constructor(protected readonly keycloak:KeycloakService) { }

  async ngOnInit(): Promise<void> {
    this.startTimer() ;
   if(DashboardComponent.k!=null)
   {
    this.userObject=await DashboardComponent.k.loadUserProfile();
    //this.tokens=await DashboardComponent.k.getToken();
   }
  }
  static fnc(k1:Keycloak)
  {
    this.k=k1;
  }
  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
        console.log(this.timeLeft);
        // if(this.userObject!=null)
        // {
        //   this.pause();
        // }
        this.Fun();
      } else {
        this.timeLeft = 60;
      }
    },1000);
  }
  async Fun()
  {
    try{
      // if(await this.keycloak.loadUserProfile()==false)
      // {
      //   console.log("is null");
      // }
      if(DashboardComponent.k!=null)
      {
        this.userObject=await DashboardComponent.k.loadUserProfile();
      // this.tokens=await DashboardComponent.k.getToken();
        if(this.userObject!=null)
        {
          console.log(this.userObject);
        }
      }else
      {
        console.log("null"+AuthService.k);
      }
    // this.refreshTokens=this.keycloak.refreshToken();
    }catch(err)
    {
      console.log(err);
    }
  }
  pause() {
    clearInterval(this.interval);
  }
  logout()
  {
    console.log("logout");
 
    this.keycloak.logout('http://localhost:4200/');
  }
  async update()
  {
    await this.keycloak.updateToken(-1).then(async()=>{
      this.tokens=await this.keycloak.getToken();
    })
    this.refreshTokens=this.keycloak.getKeycloakInstance().refreshToken;
  }
}
