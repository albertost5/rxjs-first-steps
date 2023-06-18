import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<any> = {
    next: value => console.log('next => ', value),
    error: err => console.log('error => ', err),
    complete: () => console.log('Completed!'),
}

const interval$ = new Observable(subscriber => {

    const intervalRandom = setInterval(() => {
        subscriber.next(Math.random())
    }, 1000);

    return () => {
        clearInterval(intervalRandom),
            console.log('Interval finished!');
    }
});

// const subs1 = interval$.subscribe(num => console.log('subs1 => ', num));
// const subs2 = interval$.subscribe(num => console.log('subs2 => ', num));

/**
 * 1. Multicast
 * 2. Observer
 * 3. Next, error and complete
 */
const subject$ = new Subject();
const subsInterval = interval$.subscribe(subject$);

// Receiving the same values
const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {
    subject$.next(10);
    subject$.complete();
    subsInterval.unsubscribe();
}, 4000);