import {ajax} from "rxjs/internal/ajax/ajax";
import {startWith} from "rxjs";

const loadingDiv = document.createElement('div');
loadingDiv.classList.add('loading');
loadingDiv.innerHTML = 'Loading...';

const body = document.querySelector('body');


ajax.getJSON('https://reqres.in/api/users/2?delay=3')
    .pipe(
        startWith(true)
    )
    .subscribe(res => {
        if (res === true) {
            body.append(loadingDiv)
        } else {
            document.querySelector('.loading').remove();
        }
        console.log(res)
    });