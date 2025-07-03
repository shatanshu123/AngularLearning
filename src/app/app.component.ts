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
  
  handleClickEvent(){
    console.log("Function Called")
    this.otherFunction()
  }

  otherFunction(){
    console.log("Other Function Called")
  }
  name:String="Aarushi Dushman"
  data:String|number = "Aarushi Dushman"
  name1:string="Aarushi Singh Bhilware "

  updateFunction(){
    this.data=2136767
    console.log(this.name);
    console.log(this.data)
  }
  sum(a:number,b:number){
    console.log(a+b)
  }
  count =0;
  handleI(){
    this.count=this.count+1
  }
  handleD(){
    
    this.count=this.count-1
  }
  handleR(){
    
    this.count=0
  }
  handleCounter(value:string){
    if(value=='minus'){
      if(this.count<=0){
         alert("Value cannot be less than zero")
         this.count=0
      }else{
      this.count=this.count-1
      }

    }else if(value=='plus'){
      this.count=this.count+1

    }else{
      this.count=0

    }
  }
}
