import {fromEvent} from "rxjs";
import {filter, map} from "rxjs/operators";

const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    map(event => event.code),
    filter(code => code === 'Enter')
);

keyUp$.subscribe(console.log);
