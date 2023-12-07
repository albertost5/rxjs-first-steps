import {from, of} from "rxjs";
import {map} from "rxjs/operators";

/**
 * Salida esperada:
 * Batman
 * Joker
 * Doble Cara
 * Pingüino
 * Hiedra Venenosa
 */
(() => {
    const names = ['batman', 'joker', 'doble cara', 'pingüino', 'hiedra venenosa'];
    const capitalizar = (nombre: string) => nombre.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
    // Cambiar este FOR OF, por un observable y capitalizar las emisiones
    for (let nombre of names) {
        console.log(capitalizar(nombre))
    }

    // SOLUTION
    of(...names).pipe(
        map(capitalizar)
    ).subscribe(console.log);

    from(names).pipe(
        map(capitalizar)
    ).subscribe(console.log);
})();