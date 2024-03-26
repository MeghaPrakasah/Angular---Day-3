import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'a-comp',
  standalone:true,
  templateUrl: './a.component.html',
  styleUrl: './a.component.css'
})
export class AComponent {
  title = 'my-first-project';
}