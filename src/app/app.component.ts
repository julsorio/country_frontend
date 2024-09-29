import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountryListComponent } from './components/country-list/country-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CountryListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'paises-angular';
}
