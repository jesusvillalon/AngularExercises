import { Component, OnInit } from '@angular/core';
import { Trades } from '../../interfaces/graphic.interface';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'graphic-one',
  templateUrl: './graphic-one.component.html',
  styleUrls: ['./graphic-one.component.css'],
})
export class GraphicOneComponent implements OnInit {
  data: any;
  options: any;

  public trades: Trades[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue(
      '--text-color-secondary'
    );
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');


    this.apiService.getTradesInformation().subscribe((trades) => {
      this.trades = trades;

      const symbolLabels = this.trades.map((trade) => trade.symbol);

      this.data = {
        labels: symbolLabels,
        datasets: [
          {
            label: 'Price Data',
            backgroundColor: documentStyle.getPropertyValue('--blue-500'),
            borderColor: documentStyle.getPropertyValue('--blue-500'),
            data: this.trades.map((trade) => trade.price),
          },
        ],
      };
    });
    this.options = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
            font: {
              weight: 500,
            },
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
        y: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
      },
    };
  }
}
