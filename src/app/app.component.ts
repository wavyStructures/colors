import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdventskalenderComponent } from "./adventskalender/adventskalender.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AdventskalenderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'colors';
}
