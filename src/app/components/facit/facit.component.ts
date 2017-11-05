import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-facit',
  templateUrl: './facit.component.html',
  styleUrls: ['./facit.component.css']
})
export class FacitComponent implements OnInit {

  public testFacit:string = '';
  public functionFacit:string = '';
  
  constructor(public http: Http) { 
    http.get('assets/functionFacit.txt').map(res => res.text()).subscribe((text) => {
      this.functionFacit = text;
    });
    http.get('assets/testFacit.txt').map(res => res.text()).subscribe((text) => {
      this.testFacit = text;
    });
  }
  
  ngOnInit() {
  }

}
