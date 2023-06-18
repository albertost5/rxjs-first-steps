import { fromEvent, range } from 'rxjs';
import { map } from 'rxjs/operators';

// range(1, 5).pipe(map<number, string>(it => `${it * 10}`)).subscribe(console.log);

const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup');
// keyUp$.pipe(map(it => it.code)).subscribe(console.log);

const keyUpCode$ = keyUp$.pipe(map(it => it.code));
keyUpCode$.subscribe(console.log);