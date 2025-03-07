import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FormsModule } from '@angular/forms';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  ngOnInit() {
    AOS.init();
  }
  title = 'myFisrtApp';

  var1: number = 0;
  var2: number = 0;
  reversible: number = 0;
  resultat: number = 0;
  message: string = "Hello, Angular!";
  defaultValue: string = "Valeur par défaut";
  twoWayData: string = "Modifiable";

  add(): void{
    this.resultat=this.var1+this.var2
  }
  reduce(): void{
    this.resultat=this.var1-this.var2
  }
  multiplication(): void{
    this.resultat=this.var1*this.var2
  }
  divide(): void{
    this.resultat=this.var1/this.var2
  }
  reverse(): void{
    this.reversible=this.var1
    this.var1=this.var2
    this.var2=this.reversible
  }

  // calculate(operator : string) :   any {
  //    switch (operator) {
  //     case (operator=="'"){
  //     return
  //     }
  //    }
  // }
}
