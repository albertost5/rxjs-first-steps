import { fromEvent } from "rxjs";
import { filter, map } from 'rxjs/operators';


const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup');
keyUp$.pipe(
    map(event => event.code),
    filter(it => it === 'Enter')
).subscribe(console.log);