import {distinctUntilChanged, distinctUntilKeyChanged, of} from "rxjs";

const numbers$ = of<Array<string | number>>(1, 1, '1', 2, 3, 4, 3, 5, 4);

numbers$.pipe(
    distinctUntilChanged() // It uses === for the comparison
).subscribe(console.log);

const employees$ = of(
    {name: 'John', role: 'dev'},
    {name: 'John', role: 'sales'},
    {name: 'Doe', role: 'rrhh'},
    {name: 'John', role: 'cto'}
);
/**
 * key	K
 * String key for object property lookup on each item.
 *
 * compare => boolean
 * Optional comparison function called to test if an item is distinct from the previous item in the source.
 */
employees$.pipe(
    distinctUntilKeyChanged('name')
).subscribe(console.log)
