import { Component } from '@angular/core';

interface MenuItem {
  title: string;
  route: string;
  exercise: number;
}

@Component({
  selector: 'shared-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent {
  public cardMenu: MenuItem[] = [
    { title: 'Display-Hide',
      route: './displayHide/mainPage',
      exercise: 1
    },
    {
      title: 'Component-Communication',
      route: './componentCommunication/parentPage',
      exercise: 2,
    },
    { title: 'Crud',
      route: './crud',
      exercise: 3
    },
    { title: 'Search-On-Type',
      route: './searchOnType',
      exercise: 4
    },
    { title: 'Light-Switch',
      route: './lightSwitch',
      exercise: 5
    },
    {
      title: 'External-Library',
      route: './externalLibrary',
      exercise: 6,
    },
    { title: 'Counter',
      route: './counter',
      exercise: 7 },
  ];
  // Agregar luego las rutas que hacen falta para que se vea el ejercicio!!!
}
