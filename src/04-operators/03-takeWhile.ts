import { of, takeWhile } from "rxjs";


const numbers$ = of(1, 2, 3, 4, 5);
numbers$.pipe(takeWhile(n => n < 3)).subscribe(console.log);
// The inclusive parameter emits the value that broke the condition
numbers$.pipe(takeWhile(n => n < 3, true)).subscribe(console.log);