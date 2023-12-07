import {BehaviorSubject, interval} from 'rxjs';
import {take, map} from 'rxjs/operators';
/**
 * Ejercicio: Realizar que los dos observables finales,
 * emitan exactamente el mismo valor
 *
 * Tip: Hot Observable? subjects?
 */

(() => {
    // ============================================
    const reloj$ = interval(1000).pipe(
        take(5),
        map(val => Math.round(Math.random() * 100))
    );
    // ============================================


    // Estos dos observables deben de emitir exactamente los mismos valores
    const behaviorSubReloj$: BehaviorSubject<number> = new BehaviorSubject(undefined);
    reloj$.subscribe(behaviorSubReloj$);

    behaviorSubReloj$.subscribe(val => console.log('obs1', val));
    behaviorSubReloj$.subscribe(val => console.log('obs2', val));
})();