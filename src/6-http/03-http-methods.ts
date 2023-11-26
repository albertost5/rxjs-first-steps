import {ajax} from "rxjs/internal/ajax/ajax";

const url = 'https://httpbin.org/delay/1';

// ajax.post(url, {
//     id: 123,
//     method: 'POST'
// },{
//     'mi-token': 'mytoken'
// }).subscribe(console.log);
//
// ajax.put(url, {
//     id: 123,
//     method: 'PUT'
// },{
//     'mi-token': 'mytoken'
// }).subscribe(console.log);

ajax({
    url,
    method: 'POST',
    headers: {
        whatever: 'whatever'
    },
    body: {
        id: 123,
        method: 'POST'
    }
}).subscribe(console.log);