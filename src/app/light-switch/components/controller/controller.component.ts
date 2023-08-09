import { Component } from '@angular/core';
import { TraficLightService } from '../../services/trafic-light.service';

@Component({
  selector: 'controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
export class ControllerComponent {

  public isActivated: boolean = false;

  constructor(private traficLightService: TraficLightService){}

  onSelectedColor(event: Event): void {
    // accedemos a la propiedad value del elemento html.
    const color = (event.target as HTMLSelectElement).value;
    this.traficLightService.setColor(color);
  }

  onIsActivated() {
    this.isActivated = !this.isActivated;
    this.traficLightService.setActivate(this.isActivated)
  }


}
