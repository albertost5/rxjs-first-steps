import { asyncScheduler, observeOn, of, range } from 'rxjs';


// const obs$ = of(1, 2, 3, 4, 5);
// obs$.subscribe(n => console.log(n));


// Parameters
// start	number	
// The value of the first integer in the sequence.

// count	number	
// Optional. Default is undefined.
// The number of sequential integers to generate.

const obsRange$ = range(1, 10).pipe(observeOn(asyncScheduler));

console.log('INIT');
obsRange$.subscribe(n => console.log(n));
console.log('END');