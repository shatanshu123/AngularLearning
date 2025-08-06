import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProfileComponent } from './profile/profile.component';
import { log } from 'console';

@Component({
  selector: 'app-root',
  standalone: true,
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  name=""
  displayName = ""
  getName(event:Event){
    const name = (event.target as HTMLInputElement).value
    console.log(name)
    this.name=name;
  }
  showName(){
    this.displayName = this.name;
  }
  setName(){
    this.name = "sam";
  }
  
}
