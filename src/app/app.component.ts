import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProfileComponent } from './profile/profile.component';
import { log } from 'console';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, SignUpComponent,ProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  handleClickEvent(event:MouseEvent){
    console.log("Function Called",event.type)
    console.log("Function Called",event.target)

  }
  handleClickEventValue(event:Event){
    console.log("Function Called",(event.target as HTMLInputElement).value)
    //console.log("Function Called",event.target)

  }
  handleClickEventValue1(){
    console.log("Function Called")
    //console.log("Function Called",event.target)

  }
  
}
