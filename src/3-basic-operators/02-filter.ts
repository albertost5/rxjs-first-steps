import {from, range} from "rxjs";
import {filter} from "rxjs/operators";


range(1,10).pipe(
    filter( (number, i) => {
        console.log('index: ', i);
        return number % 2 !== 0
    })
).subscribe(console.log);

interface Heroe {
    type: string;
    name: string;
}

const heroes: Heroe[] = [
    {
        type: 'hero',
        name: 'Batman'
    },
    {
        type: 'hero',
        name: 'Roben'
    },
    {
        type: 'villain',
        name: 'joker'
    }
];

from(heroes).pipe(
    filter(hero => hero.type === 'hero')
).subscribe(console.log);