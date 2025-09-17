
import { Component, effect, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Header } from './header/header';

@Component({
  selector: 'app-root',
  imports: [Header  ,RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styles:['h1{color:red,border:2px}']
})
export class App {
  protected readonly title = signal('MyFirstApp');
//   a="yash";
//   b=""
//   myFun(){
//     this.b=this.a;
//   }
//   gettName(event:Event){
// this.a=(event.target as HTMLInputElement).value;
//   }
//   getEmail(val:string){
//     console.log(val);
//   }
//   setName(val:string){
//     this.b=val;

//   }
td=false;

toggleDiv(){
this.td=!this.td; 
}


userName=signal("someone");
constructor(){
  effect(()=>{
    console.log(this.userName());
    
  })
}

changeUser(){
  this.userName.set("sometwo");
}

}   