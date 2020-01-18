import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: []
})
export class PromisesComponent implements OnInit {

  constructor() {

    this.countTo3().then(
      (message) => console.log('termino', message)
    ).catch(error => console.error('error', error));

  }

  ngOnInit() { }

  public countTo3(): Promise<string> {
    return new Promise((resolve, reject) => {
      let counter = 0;

      let interval = setInterval(() => {
        counter += 1;
        console.log(counter)
        if (counter === 3) {
          resolve('Ok!');
          //reject('Un error')
          clearInterval(interval);
        }
      }, 1000);
    });
  }

}
