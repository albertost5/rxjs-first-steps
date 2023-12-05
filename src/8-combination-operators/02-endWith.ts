import {endWith, of} from "rxjs";

const numbers$ = of(1,2,3,4,5).pipe(
    endWith(0)
);

numbers$.subscribe(console.log);

/**
 * Returns an observable that will emit all values from the source, then synchronously emit the provided value(s) immediately after the source completes.
 */