import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterModule} from '@angular/router';
import { Country } from '../../model/country.model';

@Component({
  selector: 'app-country-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.css'
})
export class CountryListComponent implements OnInit {
  countries: Country[] = [];

  constructor(private countryService: CountryService, private router: Router) {

  }
  
  ngOnInit(): void {
    this.getCountries();
  }

  getCountries() {
    this.countryService.getCountries().subscribe(
      data => {
        this.countries = data;
      });
  }

  

}
