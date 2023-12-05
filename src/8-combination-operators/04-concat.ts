import {concat, interval} from "rxjs";
import {take} from "rxjs/operators";

const interval$ = interval(1000);


concat(
    interval$.pipe(take(3)),
    interval$.pipe(take(1))
).subscribe(console.log);

/**
 * Creates an output Observable which sequentially emits all values from the first given Observable and then moves on to the next.
 */