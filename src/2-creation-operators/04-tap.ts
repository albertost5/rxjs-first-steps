import { range, tap } from 'rxjs';
import { map } from 'rxjs/operators';


const numbers$ = range(1, 5);

// tap is use to perform side effects. It does not change the initial stream

numbers$.pipe(
    tap(n => {
        console.log('from tap => ', n)
        return 100;
    }),
    map(n => n * 10),
    tap({
        next: n => console.log('after map => ', n),
        complete: () => console.log('DONE')
    })
).subscribe(n => console.log('from subscribe => ', n));