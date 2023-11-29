import {fromEvent, interval, skip, takeUntil} from "rxjs";

const button = document.createElement('button');
button.innerHTML = 'Stop';

document.querySelector('body').append(button);


const counter$ = interval(1000);
const clickButton$ = fromEvent(button, 'click');

counter$
    .pipe(
        skip(3), // 0, 1, 2
        takeUntil(clickButton$)
    ).subscribe(console.log);