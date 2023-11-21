import {range, tap} from 'rxjs';
import {map} from "rxjs/operators";

const numbers$ = range(1, 10);

numbers$.pipe(
    tap(n => console.log('tap: ', n)),
    map(n => n * 10),
    tap({
        next: (n) => console.log('tapB:', n.toString()),
        complete: () => console.log('observable completed!')
    })
).subscribe(n => console.log('subscribe: ', n));