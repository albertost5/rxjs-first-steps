import {of, reduce, tap} from "rxjs";
import {take} from "rxjs/operators";


const numbers = [1,2,3,4,5];

of(...numbers).pipe(
    take(3),
    tap(console.log),
    reduce((acc, current) => acc + current, 0)
).subscribe((rdo) => console.log('rdo => ', rdo));