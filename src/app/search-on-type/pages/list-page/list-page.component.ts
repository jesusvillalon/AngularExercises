import { Component, Input } from '@angular/core';
import { Music } from '../../interfaces/music.interface';

@Component({
  selector: 'list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent {
@Input()
public music: Music[] = []
}
