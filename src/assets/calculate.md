```typescript
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
```