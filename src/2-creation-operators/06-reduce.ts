import { interval } from "rxjs";
import { reduce, take, tap } from "rxjs/operators";

const numbers = [1, 2, 3, 4, 5];
const totalReduce = (acc: number, current: number) => acc + current;
const total = numbers.reduce(totalReduce, 0);
console.log({ reduce: total })

interval(1000).pipe(
    take(6),
    tap(console.log),
    reduce(totalReduce, 0)
).subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('completed!')
});