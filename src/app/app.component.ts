import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Code Step by step';
  name = 'Aarushi'

  // hello(){
  //   let x=10;
  //   const y=20;
  //   var data=5;
  // }
}
