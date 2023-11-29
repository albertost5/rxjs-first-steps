import {fromEvent, switchMap} from "rxjs";
import {map} from "rxjs/operators";
import {ajax} from "rxjs/internal/ajax/ajax";


const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append(textInput, orderList);

const url = 'https://httpbin.org/delay/1?arg=';

const $input = fromEvent(textInput, 'keyup');

// switchMap => Maps each value to an Observable, then flattens all of these inner Observables using switchAll.
// switchAll => Converts a higher-order Observable into a first-order Observable producing values only from the most recent observable sequence
$input.pipe(
    map(ev => ev.target['value']),
    switchMap(text => ajax.getJSON(url + text))
).subscribe(console.log);
