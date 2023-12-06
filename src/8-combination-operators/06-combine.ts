import {combineLatest, fromEvent} from "rxjs";
import {map} from "rxjs/operators";

const input_A = document.createElement('input');
const input_B = document.createElement('input');

input_A.placeholder = 'email@test.com';
input_B.placeholder = '*****';

document.querySelector('body').append(input_A, input_B);


const getInputStream = (elem: HTMLElement) =>
    fromEvent<KeyboardEvent>(elem, 'keyup').pipe(
        map(ev => ev['target']['value'])
    )


combineLatest(
    getInputStream(input_A),
    getInputStream(input_B)
).subscribe(console.log);