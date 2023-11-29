import {exhaustMap, fromEvent, interval, take} from "rxjs";

const clicks$ = fromEvent(document, 'click');

/**
 *  exhaustMap ignores every new projected Observable if the previous projected Observable has not yet completed.
 *  Once that one completes, it will accept and flatten the next projected Observable and repeat this process.
 */
clicks$.pipe(
    exhaustMap(ev => interval(1000).pipe(take(4)))
).subscribe(console.log);


