import {auditTime, fromEvent, tap} from "rxjs";
import {map} from "rxjs/operators";


const click$ = fromEvent(document, 'click');

click$.pipe(
    map((ev) => ({x: ev['x'], y: ev['y']})),
    tap(({x, y}) => console.log(`TAP: ${x}, ${y}`)),
    auditTime(5000)
).subscribe(console.log);