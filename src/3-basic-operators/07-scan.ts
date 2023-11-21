import {of, tap} from "rxjs";
import {map, scan} from "rxjs/operators";

const numbers$ = of(1,2,3);

numbers$
    .pipe(
        scan((acc, current, i) => acc + current),
        map((sum, i) => sum),
    )
    .subscribe((total) => console.log({total}));