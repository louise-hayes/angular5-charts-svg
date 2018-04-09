import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  @Input() chartData: any;
  strokeData: any;

  constructor() { }



  ngOnInit() {
    console.log(this.chartData);
    this.strokeData = {
      donut: {
        segment1: {
          'stroke-dashoffset': "25%", //presentation attribute on donut - % which quadrant 10 - 100 
          'stroke-dasharray': "40, 60", //
          'stroke-width': "3", //static all segments
          'class': "donut-segment",
          'cx': "21", //static al segments
          'cy': "21", //static all segments
          'r': "15.91549430918954",
          'fill': "transparent",
          stroke: "#ce4b99",
          'aria-labelledby': "donut-segment-1-title donut-segment-1-desc"
        }
      }

    }


    console.log(this.strokeData);
  }

}
