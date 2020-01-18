import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementer',
  templateUrl: './incrementer.component.html',
  styles: []
})
export class IncrementerComponent implements OnInit {

  @ViewChild('txtProgress', {static: false}) txtProgress: ElementRef;

  @Input('progressTitle') public title: string = 'Título';
  @Input('progressPercentage') public progress: number = 50;

  @Output() public modifValue: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  public changeValue(value: number) {
    if (this.progress >= 100 && value > 0) {
      this.progress = 100
      return;
    }
    if (this.progress <= 0 && value < 0) {
      this.progress = 0;
      return;
    }

    this.progress += value;
    this.modifValue.emit(this.progress);
  }

  public onChange(newValue: number) {

    if (newValue >=100) {
      this.progress = 100;
    } else if (newValue <= 0) {
      this.progress = 0;
    } else {
      this.progress = newValue;
    }

    this.txtProgress.nativeElement.value = this.progress;
    this.modifValue.emit(this.progress);
  }

}
