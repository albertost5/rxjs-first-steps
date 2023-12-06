import {delay, forkJoin, interval, of, switchMap} from "rxjs";
import {take} from "rxjs/operators";


const numbers$ = of(1, 2, 3, 4);
const interval$ = interval(1000).pipe(take(3)); // 0, 1, 2...
const letters$ = of('a', 'b', 'c').pipe(delay(3000));

// forkJoin(numbers$, interval$, letters$).subscribe(console.log);

// forkJoin(numbers$, interval$, letters$)
//     .subscribe(res => {
//         console.log('numbers$ =>', res[0]);
//         console.log('interval =>', res[1]);
//         console.log('letters$ =>', res[2]);
//     });

// forkJoin({num: numbers$, int: interval$, lett: letters$})
//     .subscribe(res => {
//         console.log({
//             num: res.num,
//             int: res.int,
//             lett: res.lett
//         })
//     });

forkJoin([numbers$, interval$, letters$])
    .pipe(
        switchMap(([num, int, lett]) => [num, int, lett])
    )
    .subscribe(res => console.log(res))