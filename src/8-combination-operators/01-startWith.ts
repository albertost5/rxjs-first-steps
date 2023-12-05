import {of, startWith} from "rxjs";

const numbers$ = of(1,2,3,4,5).pipe(
    startWith(0)
);

numbers$.subscribe(console.log);

/**
 * Returns an observable that, at the moment of subscription, will synchronously emit all values provided to this operator,
 * then subscribe to the source and mirror all of its emissions to subscribers
 */