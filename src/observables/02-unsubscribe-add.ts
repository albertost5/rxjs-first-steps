import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
    next: value => console.log('next => ', value),
    error: err => console.log('error => ', err),
    complete: () => console.log('Completed!'),
}


const interval$ = new Observable<number>(subs => {
    let counter = 0;

    const interval = setInterval(() => {
        counter++;
        subs.next(counter);
        console.log({ counter })
    }, 1000);

    setTimeout(() => {
        subs.complete();
    }, 2500);

    return () => {
        clearInterval(interval);
        console.log('Interval finished!');
    }
});

const subs = interval$.subscribe(observer);
const subs2 = interval$.subscribe(observer);
const subs3 = interval$.subscribe(observer);

subs.add(subs2.add(subs3));


setTimeout(() => {
    subs.unsubscribe();
    // subs2.unsubscribe();
    // subs3.unsubscribe();
    console.log('Timeout completed!');
}, 6000);