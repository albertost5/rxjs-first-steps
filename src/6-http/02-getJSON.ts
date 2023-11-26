import {ajax} from "rxjs/internal/ajax/ajax";


const url = 'https://httpbin.org/delay/1';
// const url = 'https://api.github.com/users?per_page=5';

const obs$ = ajax.getJSON(url, {
    'Content-Type': 'application/json',
    'my-token': 'mytoken'
});

obs$.subscribe((res) => console.log('response: ', res));