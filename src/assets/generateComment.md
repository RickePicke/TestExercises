```typescript
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
```