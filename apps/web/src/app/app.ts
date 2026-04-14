import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Portfolio } from './pages/portfolio';

@Component({
  imports: [RouterModule, Portfolio],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'web';
}
