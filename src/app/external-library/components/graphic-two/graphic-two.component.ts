import { Component, OnInit } from '@angular/core';
import { Trades } from '../../interfaces/graphic.interface';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'graphic-two',
  templateUrl: './graphic-two.component.html',
  styleUrls: ['./graphic-two.component.css']
})
export class GraphicTwoComponent implements OnInit {
    data: any;
    options: any;

    public trades: Trades[] = [];

    constructor(private apiService: ApiService){}

    ngOnInit() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        this.apiService.getTradesInformation().subscribe((trades) => {
          this.trades = trades

          const symbolLabels = this.trades.map((trade) => trade.symbol);

        this.data = {
            labels: symbolLabels,
            datasets: [
                {
                    label: 'Volume Data',
                    fill: false,
                    borderColor: documentStyle.getPropertyValue('--blue-500'),
                    tension: 0.4,
                    data: this.trades.map((trade) => trade.volume)
                },
            ]
        };
        })



        this.options = {
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };
    }
}
