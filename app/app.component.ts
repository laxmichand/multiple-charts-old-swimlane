import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { single, singleBar, multiBar, multiLine } from './data';

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
    Object.assign(this, { singleBar });
    Object.assign(this, { multiLine });
  }

  onSelect(data, element): void {
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
    this.getCalculate();
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

  singleBar: any[];
  multiBar: any[];

  viewBar: any[] = [600, 400];

  // options
  showXAxisBar = true;
  showYAxisBar = true;
  gradientBar = false;
  showLegendBar = false;
  showXAxisLabelBar = true;
  // xAxisLabelBar = 'Country';
  showYAxisLabelBar = true;
  // yAxisLabelBar = 'Population';

  colorSchemeBar = {
    domain: ['#c9c9c9', '#58b4cd', '#9247b4', '#45ae94', '#fa631d'],
  };

  onSelectBar(event) {
    console.log(event);
  }

  //
  multiLine: any[];
  viewLine: any[] = [600, 300];

  // options
  legendLine: boolean = false;
  showLabelsLine: boolean = true;
  animationsLine: boolean = true;
  xAxisLine: boolean = true;
  yAxisLine: boolean = true;
  showYAxisLabelLine: boolean = true;
  showXAxisLabelLine: boolean = true;
  xAxisLabelLine: string = 'Year';
  yAxisLabelLine: string = 'Population';
  timelineLine: boolean = true;

  colorSchemeLine = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
  };

  onSelectLine(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivateLine(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivateLine(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  getColor(elem) {
    alert(elem.style.backgroundColor);
  }
}
