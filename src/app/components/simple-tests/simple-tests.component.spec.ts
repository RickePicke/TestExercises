import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SimpleTestsComponent } from './simple-tests.component';
import { MarkdownModule } from 'angular2-markdown';
import { MatButtonModule } from '@angular/material';

describe('SimpleTestsComponent', () => {
  let component: SimpleTestsComponent;
  let fixture: ComponentFixture<SimpleTestsComponent>;

  beforeEach(async(() => {
    // Deklarerar komponenten
    TestBed.configureTestingModule({
      declarations: [ 
        SimpleTestsComponent 
      ],
      imports: [
        MarkdownModule,
        MatButtonModule
      ] 
    })
    .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleTestsComponent);
    component = fixture.componentInstance; // Gör en instans av komponenten
    fixture.detectChanges();
  });
  // Allt ovan följer med när en komponent skapas med angualr-cli. Komandot för det är: ng g component "namn"
  // Exakt vad som händer här går att läsa på https://angular.io/guide/testing#test-a-component

  // Skriv test för funktionen generateComment här
  describe('generateComment', () => {
    it('shold have tests', () => {
      expect(true).toBeFalsy();      
    });

  });

  // Skriv test för funktionen calculate här
  describe('calculate', () => {
    it('shold have tests', () => {
      expect(true).toBeFalsy();
    });

  });
  
  // Skriv test för funktionen toggleScore här
  describe('toggleScore', () => {
    it('shold have tests', () => {
      expect(true).toBeFalsy();
    });
  });

  // Gör klart funktionen som detta test testar
  describe('getResult', () => {
    let generateCommentSpy;

    beforeEach(() => {
      generateCommentSpy = spyOn(component, 'generateComment');
    });

    it('sholud return a string containing the score if the score is greater than 0', () => {
      component.score = 10;
      const result = component.getResult();
      expect(result).toContain(`${component.score}`);
      expect(generateCommentSpy).toHaveBeenCalled();
    });

    it('sholud return a string not containing the score and if the score is less than 1', () => {
      component.score = 0;
      const result = component.getResult();
      expect(result).toEqual('You don\'t want to know!');
      expect(generateCommentSpy).toHaveBeenCalledTimes(0);      
    });

  });
});
