import {distinct, Observable, of} from "rxjs";

const numbers$ = of<Array<string|number>>(1, 1, '1', 2, 3, 4, 3, 5, 4);

numbers$.pipe(
    distinct() // It uses === for the comparison
).subscribe(console.log);

const employees$ = of(
    {name: 'John', role: 'dev'},
    {name: 'Doe', role: 'ceo'},
    {name: 'John', role: 'cto'}
);

employees$.pipe(
    distinct(({name}) => name)
).subscribe(console.log)