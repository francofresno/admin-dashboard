import { Component, OnInit } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-graphics1',
  templateUrl: './graphics1.component.html',
  styles: []
})
export class Graphics1Component implements OnInit {

  graphics: any = {
    'graphic1': {
      'labels': ['Manteca', 'Dulce de Leche', 'Queso'],
      'data': [24, 30, 46],
      'type': 'doughnut',
      'description': 'El pan se come con'
    },
    'graphic2': {
      'labels': ['Hombres', 'Mujeres'],
      'data': [4500, 6000],
      'type': 'doughnut',
      'description': 'Entrevistados'
    },
    'graphic3': {
      'labels': ['Si', 'No'],
      'data': [95, 5],
      'type': 'doughnut',
      'description': '¿Le gustan los perros?'
    },
    'graphic4': {
      'labels': ['No', 'Si'],
      'data': [85, 15],
      'type': 'doughnut',
      'description': '¿Le gustan los gatos?'
    },
  };

  constructor() { }

  ngOnInit() { }

}
