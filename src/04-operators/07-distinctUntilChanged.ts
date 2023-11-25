import {distinctUntilChanged, of} from "rxjs";

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

employees$.pipe(
    distinctUntilChanged((prev, current) => (prev.name === current.name && prev.role === current.role))
).subscribe(console.log)

/**
 * @param keySelector
 * Used to select a key value to be passed to the comparator.
 */
// employees$.pipe(
//     distinctUntilChanged(undefined, employee => employee.name)
// ).subscribe(console.log)