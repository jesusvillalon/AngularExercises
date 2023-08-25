import { Component } from '@angular/core';

interface MenuItem {
  title: string;
  route: string;
  exercise: number;
  img: string;
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
      exercise: 1,
      img: '../assets/images/exerciseImages/Ejercicio1.png'
    },
    {
      title: 'Component-Communication',
      route: './componentCommunication/parentPage',
      exercise: 2,
      img: '../assets/images/exerciseImages/Ejercicio2.png'
    },
    { title: 'Crud',
      route: './crud',
      exercise: 3,
      img: '../assets/images/exerciseImages/Ejercicio3.png'
    },
    { title: 'Search-On-Type',
      route: './searchOnType',
      exercise: 4,
      img: '../assets/images/exerciseImages/Ejercicio4.png'
    },
    { title: 'Light-Switch',
      route: './lightSwitch',
      exercise: 5,
      img: '../assets/images/exerciseImages/Ejercicio5.png'
    },
    {
      title: 'External-Library',
      route: './externalLibrary',
      exercise: 6,
      img: '../assets/images/exerciseImages/Ejercicio6.png'
    },
    { title: 'Counter',
      route: './counter',
      exercise: 7,
      img: '../assets/images/exerciseImages/Ejercicio7.png'
     },
    { title: 'ToDo-List',
      route: './todoList/toDoPage',
      exercise: 8,
      img: ''
     },
  ];
}
