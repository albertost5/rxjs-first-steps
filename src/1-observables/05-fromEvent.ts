import { fromEvent } from 'rxjs';

/**
 * DOM events
 */
const obs1$ = fromEvent<PointerEvent>(document, 'click');
const obs2$ = fromEvent<KeyboardEvent>(document, 'keyup');

// It allows you to ev.key but missing types 
// const obs2$ = fromEvent<any>(document, 'keyup');

const observer = {
    next: (val) => console.log('NEXT FROM OBSERVER => ', val)
}

obs1$.subscribe(observer);
obs1$.subscribe(({ x, y }) => console.log({ x, y }));
obs2$.subscribe(ev => console.log('event => ', ev.key));

// Error because there is no type
// const obs2$ = fromEvent<KeyboardEvent>(document, 'keyup');
// obs2$.subscribe(event => console.log('event => ', event.key));

