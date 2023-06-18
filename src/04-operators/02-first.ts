import { first, from } from "rxjs";


const numbers$ = from([1, 10, 15, 20, 25]);

numbers$.pipe(first()).subscribe(console.log);
numbers$.pipe(first(n => n % 2 == 0)).subscribe(console.log);