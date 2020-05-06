import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BMICalculatorx';
  weightKG: number;
  heightM: number;
  bmiMetric: number;

constructor() { }


bodyMassMetric(): number{
  return this.bmiMetric = this.weightKG / (this.heightM = this.heightM);
}

}
