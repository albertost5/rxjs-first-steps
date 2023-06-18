import { of, from } from 'rxjs';


/**
 * of, converts the arguments to an observable sequence
 * from, take an Array, an array-like object, a Promise, an iterable object, or an Observable-like object
 */

const observer = {
    next: (val) => console.log('next: ', val),
    complete: () => console.log('completed!')
};

// const source$ = from([1, 2, 3, 4, 5]);
// const source$ = of(...[1, 2, 3, 4, 5]);

// const source$ = from('John');

const source$ = from(fetch('https://api.github.com/users/albertost5'))

// source$.subscribe(async (res) => {
//     const data = await res.json();
//     console.log({ data })
// });