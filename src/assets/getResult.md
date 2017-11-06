```typescript
getResult ():string {
  if(this.score > 0) {
    return `Your score is ${this.score}, ${this.generateComment()}`;
  }
  return 'You don\'t want to know!';
}
```
