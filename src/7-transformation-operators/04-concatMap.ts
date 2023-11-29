import {concatMap, fromEvent, interval, switchMap, take} from "rxjs";

const clicks$ = fromEvent(document, 'click');

/** 
 * concatMap => Maps each value to an Observable, then flattens all of these inner Observables using concatAll.
 * Projects each source value to an Observable which is merged in the output Observable, in a serialized fashion waiting for each one 
 * to complete before merging the next.
 */
clicks$.pipe(
    concatMap(ev => interval(1000).pipe(take(4)))
).subscribe(console.log);

// Emitting values only from the most recently projected Observable.
clicks$.pipe(
    switchMap(ev => interval(1000).pipe(take(4)))
).subscribe(console.log);
