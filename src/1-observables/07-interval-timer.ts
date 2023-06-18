import { interval, timer } from 'rxjs';

const observer = {
    next: val => console.log('next:', val),
    complete: () => console.log('complete')
}

const date = new Date();
date.setSeconds(date.getSeconds() + 5);

// async observables
const interval$ = interval(1000);
const timer$ = timer(date);

console.log('INIT');
// interval$.subscribe(observer);
timer$.subscribe(observer);
console.log('END');