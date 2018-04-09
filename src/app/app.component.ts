import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  chartData: any;

  constructor() {
    this.chartData = {
      type:'donut',
      title1: 'User',
      title2:'Clicks',
      sections: 4,
      section1: 'Exits 4',
      section2: 'Chats 4 ',
      section3: 'Signups 2 ',
      stroke: 25

  }
}
}