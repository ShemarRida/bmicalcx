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

bodyMassMetric(){
   this.bmiMetric = this.weightKG / Math.pow(this.heightM/100,2)
}

}
