import { Component, OnInit } from '@angular/core';
import { TraficLightService } from '../../services/trafic-light.service';

@Component({
  selector: 'trafic-light',
  templateUrl: './trafic-light.component.html',
  styleUrls: ['./trafic-light.component.css']
})
export class TraficLightComponent implements OnInit{

  public selectedColor: string = "rojo";
  public isActivated: boolean = false;

  constructor(private traficLightService: TraficLightService){}

  ngOnInit(): void {
    this.traficLightService.getColor().subscribe(color => {
      this.selectedColor = color;
    })

    this.traficLightService.getActivate().subscribe(activate => {
      this.isActivated = activate;
    })

  }

}
