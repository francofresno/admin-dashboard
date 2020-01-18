import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  public suscription: Subscription;

  constructor() {

    this.suscription = this.returnObservable()
    /* .pipe(
      retry(2)   // Cuando surge un error, intenta de nuevo (param: cantidad de intentos)
    ) */
    .subscribe( 
      number => console.log('Subs: ', number),
      error => console.error('Error en obs: ', error),
      () => console.log('El observer terminó')
    );

   }

  ngOnInit() { }

  ngOnDestroy() {
    this.suscription.unsubscribe(); // Cuando me voy de la página, mata al observable
  }

  public returnObservable(): Observable<any> {
    return new Observable( (observer: Subscriber<any> ) => {

      let counter = 0;
      const interval = setInterval( () => {
        counter++;

        const ret = {
          value: counter
        };

        observer.next(ret);

/*         if (counter === 3) {
          clearInterval(interval);
          observer.complete();
        } */

/*         if (counter === 2) {
          clearInterval(interval);
          observer.error(':(');
        } */

      }, 1000);
    }).pipe(
      map(resp => resp.value)
    );
  }

}
