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
    it('should return a string containing \'ok\' if the value is bigger than 0 and less than 10',() => {
        component.score = 5;
        const result = component.generateComment();
        expect(result).toContain('ok');
    });

    it('should return a string containing \'bad\' if the value is less than 1',() => {
        component.score = 0;    
        const result = component.generateComment();
        expect(result).toContain('bad');
    });

    it('should return a string containing \'super\' if the value is grater than 9',() => {
        component.score = 10;   
        const result = component.generateComment();
        expect(result).toContain('super');
    });
  
  });

  // Skriv test för funktionen calculate här
  describe('calculate', () => {
    it('should add the values if the calculation method is +', () => {
      const result = component.calculate(6, 3, '+');
      expect(result).toEqual(9);
    });

    it('should take away valueTwo from valueOne if the calculation method is -', () => {
        const result = component.calculate(6, 3, '-');
        expect(result).toEqual(3);
    });

    it('should multiply the values if the calculation method is *', () => {
        const result = component.calculate(6, 3, '*');
        expect(result).toEqual(18);
    });

    it('should add the values if the calculation method is +', () => {
        const result = component.calculate(6, 3, '/');
        expect(result).toEqual(2);
    });

    it('should return a string if the calculation method is invalid', () => {
        const result = component.calculate(6, 3, 'x');
        expect(typeof result === 'string').toBeTruthy();
    });

  });
  
  // Skriv test för funktionen toggleScore här
  describe('toggleScore', () => {
    beforeEach(() => {
        component.score = 0;
    });

    it('sholud increase the score if no argument is given', () => {
        component.toggleScore();
        expect(component.score === 1).toBe(true);
    });

    it('sholud increase the score if false if given as argument', () => {
        component.toggleScore(false);
        expect(component.score).toEqual(1);
    });

    it('sholud decrease the score true if given as argument', () => {
        component.toggleScore(true);
        expect(component.score === -1).toBeTruthy();
    });

    it('should call functionOne once', () => {
        let generateCommentSpy = spyOn(component, 'generateComment');
        component.toggleScore();      
        expect(generateCommentSpy).toHaveBeenCalledTimes(1);
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
