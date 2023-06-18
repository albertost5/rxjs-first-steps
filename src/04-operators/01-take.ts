import { of, take, tap } from "rxjs";


const numbers$ = of(1, 2, 3, 4, 5);
// const numbers$ = of(1, 2, 3, 4, 5).pipe(tap(console.log));


numbers$.pipe(
    take(2)
).subscribe({
    next: n => console.log('next: ', n),
    complete: () => console.log('COMPLETE!')
});