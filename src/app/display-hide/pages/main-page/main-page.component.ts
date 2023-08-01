import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  public showTitle: boolean = false;
  public buttonText: string = "Enseñar"

  showMessage(): void{
    this.showTitle = !this.showTitle
    this.buttonText = this.showTitle ? "Esconder" : "Enseñar"
  }
}
