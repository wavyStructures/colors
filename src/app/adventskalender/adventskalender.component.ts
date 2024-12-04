import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-adventskalender',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './adventskalender.component.html',
  styleUrl: './adventskalender.component.scss',
})
export class AdventskalenderComponent {
  doors = Array.from({ length: 24 }, (_, i) => ({
    day: i + 1,
    open: false,
    content: `Türchen ${i + 1}`,
  }));

  today = new Date().getDate();

  openDoor(door: any, index: number) {
    if (door.opened) return;
    door.opened = true;
    console.log(`Door ${index + 1} opened!`);
  }
}
