import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html'
})
export class ProgressComponent implements OnInit {

  public progress1: number = 20;
  public progress2: number = 30;

  constructor() { }

  ngOnInit() {}

}
