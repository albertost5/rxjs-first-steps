import { asyncScheduler } from 'rxjs';

const sayHello = () => console.log('Hello World!');
const sayHelloName = (name: string) => console.log(`Hello ${name}!`);

// asyncScheduler.schedule(sayHello, 3000);
// asyncScheduler.schedule(sayHelloName, 3000, 'John');


const subs = asyncScheduler.schedule(function (state) {

    console.log('state: ', state);
    this.schedule(state + 1, 1000);

}, 3000, 0);

// setTimeout(() => {
//     subs.unsubscribe();
//     console.log('Unsubscribed!');
// }, 6000);

asyncScheduler.schedule(() => subs.unsubscribe(), 6000);