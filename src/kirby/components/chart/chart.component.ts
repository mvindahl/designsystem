import { Component, OnInit, Input, OnChanges, ElementRef, ViewChild, Inject } from '@angular/core';
import { Options } from 'highcharts';

import { ChartHelper } from './chart-helper';
import { DonutOptions, DONUT_OPTIONS } from './options/donut';
import { AreaSplineOptions, AREASPLINE_OPTIONS } from './options/areaspline';
import { TimeSeriesOptions, TIMESERIES_OPTIONS } from './options/timeseries';
import { ACTIVITYGAUGE_OPTIONS, ActivityGaugeOptions } from './options/activitygauge';
import { ChartType } from './chart-type';

@Component({
  selector: 'kirby-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  providers: [
    ChartHelper,
    { provide: DONUT_OPTIONS, useValue: DonutOptions },
    { provide: AREASPLINE_OPTIONS, useValue: AreaSplineOptions },
    { provide: TIMESERIES_OPTIONS, useValue: TimeSeriesOptions },
    { provide: ACTIVITYGAUGE_OPTIONS, useValue: ActivityGaugeOptions },
  ],
})
export class ChartComponent implements OnInit, OnChanges {
  @Input() data = [];
  @Input() height: number | string = 300;
  @Input() width: number | string = null;
  @Input() type: ChartType = ChartType.PIE;
  @Input() description = '';
  @Input() showDataLabels = true;
  @ViewChild('chartContainer', { static: true }) chartContainer: ElementRef;
  options: Options = {};

  constructor(
    private chartHelper: ChartHelper,
    @Inject(DONUT_OPTIONS) public donutOptions: Options,
    @Inject(AREASPLINE_OPTIONS) public areasplineOptions: Options,
    @Inject(TIMESERIES_OPTIONS) public timeSeriesOptions: Options,
    @Inject(ACTIVITYGAUGE_OPTIONS) public activitygaugeOptions: Options
  ) {}

  ngOnInit() {
    this.setupChartType();
    this.updateProperties();
    this.chartHelper.init(this.options, this.chartContainer);
  }

  ngOnChanges() {
    this.updateProperties();
    this.chartHelper.updateChart(this.options);
  }

  setupChartType() {
    switch (this.type) {
      case ChartType.DONUT: {
        this.options = this.donutOptions;
        this.options.chart.type = ChartType.PIE;
        this.options.plotOptions.pie.innerSize = '50%';
        break;
      }
      case ChartType.PIE: {
        this.options = this.donutOptions;
        this.options.chart.type = this.type;
        this.options.plotOptions.pie.innerSize = '0%';
        break;
      }
      case ChartType.AREASPLINE: {
        this.options = this.areasplineOptions;
        this.options.chart.type = this.type;
        break;
      }
      case ChartType.TIMESERIES: {
        this.options = this.timeSeriesOptions;
        this.options.chart.type = this.type;
        break;
      }
      case ChartType.ACTIVITYGAUGE: {
        this.options = this.activitygaugeOptions;
        this.options.chart.type = this.type;
        break;
      }
    }
  }

  updateProperties() {
    if (this.options.chart) {
      this.options.chart.height = this.height;
      this.options.chart.width = this.width;
      if (this.options.accessibility) {
        this.options.accessibility.description = this.description;
      }
      switch (this.options.chart.type) {
        case ChartType.PIE:
          this.options.plotOptions.series.dataLabels = { enabled: this.showDataLabels };
        /* falls through */
        case ChartType.DONUT: {
          this.options.series = [
            {
              type: 'pie',
              data: this.data,
            },
          ];
          break;
        }
        case ChartType.AREASPLINE: {
          this.options.series = [
            {
              type: 'areaspline',
              data: this.data,
            },
          ];
          break;
        }
        case ChartType.TIMESERIES: {
          this.options.series = [
            {
              type: 'area',
              data: this.data,
            },
          ];
          break;
        }
        case ChartType.ACTIVITYGAUGE: {
          const data = this.data[0];

          this.options.title.text = data.title;
          this.options.subtitle.text = data.subtitle;

          if (data.paneBackgroundColor) {
            this.options.pane.background = [
              {
                ...this.options.pane.background[0],
                backgroundColor: data.paneBackgroundColor,
              },
            ];
          }
          if (data.color) {
            this.options.title.style.color = data.color;
            this.options.subtitle.style.color = data.color;
          }
          this.options.series = [
            {
              type: 'solidgauge',
              data: data.series,
            },
          ];
          break;
        }
      }
    }
  }
}
