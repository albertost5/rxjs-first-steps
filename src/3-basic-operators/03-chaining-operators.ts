import {fromEvent} from "rxjs";
import {map} from "rxjs/operators";

const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    map( event => event.code)
);

keyUp$.subscribe(console.log);
