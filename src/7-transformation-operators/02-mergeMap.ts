import {interval, mergeMap, of} from "rxjs";
import {map, take} from "rxjs/operators";


const words$ = of('aaa', 'bbb', 'ccc');

// mergeMap: Maps each value to an Observable, then flattens all of these inner Observables using mergeAll.

words$.pipe(
    mergeMap((word) => interval(1000).pipe(
            map( i => word + i),
            take(3)
        )
    )
).subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('complete triggered!')
});