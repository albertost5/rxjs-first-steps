import { from } from 'rxjs';
import { reduce, scan } from 'rxjs/operators';

const numbers = [1, 2, 3, 4, 5];

const acc = (acc: number, current: number) => acc + current;

// Reduce
from(numbers).pipe(
    reduce(acc, 0)
).subscribe(console.log);

// Scan
from(numbers).pipe(
    scan(acc, 0)
).subscribe(console.log);