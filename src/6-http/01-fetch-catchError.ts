import {ajax} from "rxjs/internal/ajax/ajax";
import {catchError, map} from "rxjs/operators";
import {of, throwError} from "rxjs";

const url = 'https://api.github.com/users?per_page=5';
const fetchPromise = fetch(url);

const handleError = (response: Response) => {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

// fetchPromise
//     .then(handleError)
//     .then(res => res.json())
//     .then(data => console.log('data: ', data))
//     .catch(err => console.log('catchError: ', err));

ajax(url).pipe(
    map(res => res.response),
    catchError(
        err => throwError(() => err)
        // err => of([]) => trigger the next fn
    )
).subscribe({
    next: (res) => console.log('next: ', res),
    error: (err) => console.log('error: ', err)
});