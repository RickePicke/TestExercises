import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-simple-tests',
  templateUrl: './simple-tests.component.html',
  styleUrls: ['./simple-tests.component.css']
})

export class SimpleTestsComponent implements OnInit {
  private readonly calculationMethods = ['+', '-', '*', '/'];
  private categories:any;
  public score: number = 0; // Detta attribut är skapat för testerna

  constructor(private http: Http) { 
    http.get('assets/exercises.json').map(res => res.json()).subscribe((data)=>{
      this.categories = data;
    });
  }

  ngOnInit() {
    
  }

  // Skriv test till den här funktionen
  generateComment (){
    if(this.score > 0 && this.score < 10) {
      return 'it\'s ok.'
    }
    else if(this.score >= 10) {
      return 'it\'s super!'
    }
    return 'it\'s bad..'
  }

  // Skriv test till den här funktionen
  calculate (valueOne:number, valueTwo:number, calculationMethod:string) {
    if(this.calculationMethods.indexOf(calculationMethod) !== -1) {
      return eval(`${valueOne} ${calculationMethod} ${valueTwo}`);
    }
    return 'Calculation method invalid';  
  }

  // Skriv test till den här funktionen
  toggleScore (decrease:boolean = false) {
    decrease ? this.score-- : this.score++;
    this.generateComment();
  }

  // Skriv funktionen så att testerna som finns på den inte fallerar.
  getResult ():string {
    if(this.score > 0) {
      return `Your score is ${this.score}, ${this.generateComment()}`;
    }
    return 'You don\'t want to know!';
  }

}
