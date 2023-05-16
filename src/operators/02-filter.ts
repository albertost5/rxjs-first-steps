import { from, of, range } from "rxjs";
import { filter, map } from "rxjs/operators";


// range(1,10).pipe(filter( (n,index) => {
//     console.log('index => ', index)
//     return n % 2 == 0;
// })).subscribe(console.log);

interface Hero {
    type: string;
    name: string
}

const heroes: Hero[] = [
    {
        type: 'hero',
        name: 'Batman'
    },
    {
        type: 'hero',
        name: 'Robin'
    },
    {
        type: 'villain',
        name: 'Joker'
    }
]

// OF and FROM to create observables

const heroes$ = of(...heroes).pipe(filter(hero => hero.type !== 'villain'));
const villains$ = from(heroes).pipe(filter(hero => hero.type == 'villain'));

heroes$.subscribe(console.log);
console.log('-----')
villains$.subscribe(console.log);