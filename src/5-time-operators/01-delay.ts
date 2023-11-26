import {delay, fromEvent, of} from "rxjs";

const numbers$ = of(1,2,3,4,5);

numbers$.pipe(
    delay(1000) // The numbers$ will be delayed 1 sec.
).subscribe(console.log);

const button = document.createElement('button');
button.innerHTML = 'click me';
document.querySelector('body').append(button);

const click$ = fromEvent(button, 'click');

click$.pipe(
    delay(1000)
).subscribe(() => console.log('clicked!'));