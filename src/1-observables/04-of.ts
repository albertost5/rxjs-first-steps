import { of } from 'rxjs';

// const obs$ = of(1, 2, 3, 4, 5, 6);
const obs$ = of(...[1, 2, 3, 4, 5, 6], 7, 8, 9);
// const obs$ = of([1, 2], { a: 1, b: 2 }, function () { }, true, Promise.resolve(true));

console.log('Observable init!');

obs$.subscribe({
    next: (number) => console.log(`next: ${number}`),
    complete: () => console.log('observable finished!')
});

console.log('Observable done!');