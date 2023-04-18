import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
    next: value => console.log('next => ', value),
    error: err => console.log('error => ', err),
    complete: () => console.log('Completed!'),
}

const obs$ = new Observable<string>(subs => {
    subs.next('Hello');

    // To trigger the error
    // const a = undefined;
    // a.name = 'World';

    subs.next('World');
    // subs.next(1);
    subs.complete();
    subs.next('Hello World');
});

// obs$.subscribe({
//     next: (n) => console.log(n),
//     error: (err) => console.error('error => ', err),
//     complete: () => console.log('Completed!')
// }); 

obs$.subscribe(observer);
obs$.subscribe();