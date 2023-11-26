import {fromEvent, debounceTime, of, tap, distinctUntilChanged} from 'rxjs';
import {map} from "rxjs/operators";

const numbers$ = of(1,2,3,4,5);

numbers$.pipe(
    debounceTime(1000) // It skips all the values and just print the latest one
).subscribe(console.log);

const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent(input, 'keyup');

input$.pipe(
    debounceTime(1000),
    map( e => e.target['value']),
    distinctUntilChanged()
).subscribe(console.log);
