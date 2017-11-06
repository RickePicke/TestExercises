```typescript
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
```