import {debounceTime, fromEvent, mergeAll, Observable} from "rxjs";
import {map} from "rxjs/operators";
import {ajax} from "rxjs/internal/ajax/ajax";
import {GithubUsersResponse, User} from "../interfaces";

const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');

body.append(textInput, orderList);

// Helpers
const showUsers = (users: User[]) => {
    console.log({users});
    orderList.innerHTML = '';

    for (const user of users) {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = user.avatar_url;
        const link = document.createElement('a');
        link.href = user.html_url;
        link.text = user.login;
        link.target = '_blank';

        li.append(img);
        // li.append(user.login + ' ');
        li.append(link);

        orderList.append(li);
    }
}

// Streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

input$
    .pipe(
        debounceTime(500),
        map<KeyboardEvent, Observable<GithubUsersResponse>>(ev => {
            const query = ev.target['value'];
            return ajax.getJSON(`https://api.github.com/search/users?q=${query}`)
        }),
        mergeAll(), // it subscribes to that and delivers all the values from the inner Observable on the output Observable
        map((data: GithubUsersResponse) => data['items'])
    ).subscribe(showUsers);
