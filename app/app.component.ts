import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { single } from './data';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  single: any[];
  view: any[] = [300, 400];

  // options
  gradient: boolean = true;
  showLegend: boolean = false;
  showLabels: boolean = false;
  isDoughnut: boolean = true;
  legendPosition: string = 'below';

  name = 'Total Incidents';
  value = '107';

  colorScheme = {
    domain: ['#c9c9c9', '#58b4cd', '#9247b4', '#45ae94', '#fa631d'],
  };

  constructor() {
    this.getCalculate();
    Object.assign(this, { single });
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
    this.name = JSON.parse(JSON.stringify(data)).value.name;
    let temp = JSON.parse(JSON.stringify(data)).value.value;
    this.value = ((Number(this.value) * temp) / 100).toString() + `%`;
  }

  onDeactivate(data): void {
    this.name = 'Total Incidents';
    this.value = '107';
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  getCalculate() {
    const initialValue = 0;
    this.value = single
      .map((s) => {
        return s.value;
      })
      .reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue
      )
      .toString();
    let t = single.map((s) => {
      return { ...s, value: Math.round(s.value * Number(this.value)) / 100 };
    });
  }
}
