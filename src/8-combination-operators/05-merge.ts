import {fromEvent, merge} from "rxjs";
import {map} from "rxjs/operators";

const keyup$ = fromEvent(document, 'keyup');
const click$ = fromEvent(document, 'click');

merge(
    keyup$.pipe(map(ev => ev['type'])),
    click$.pipe(map(ev => ev['type']))
).subscribe(console.log);

/**
 * Creates an output Observable which concurrently emits all values from every given input Observable.
 * It does not complete untill all the observables are completed.
 */