import {asyncScheduler, distinctUntilChanged, fromEvent, throttleTime} from 'rxjs';
import {map} from "rxjs/operators";

const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent(input, 'keyup');

input$.pipe(
    throttleTime(1000, asyncScheduler, {
        leading: false, // output the first element emitted from the observable
        trailing: true // output the last element emitted from the observable
    }),
    map( e => e.target['value']),
    distinctUntilChanged()
).subscribe(console.log);
