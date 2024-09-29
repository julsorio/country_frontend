import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Country } from '../../model/country.model';

@Component({
  selector: 'app-country-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './country-form.component.html',
  styleUrl: './country-form.component.css'
})
export class CountryFormComponent implements OnInit {

  country: Country = {
    id: 0,
    name: ''
  }

  isEditMode: boolean = false;

  constructor(private countryService: CountryService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    const id: any = this.route.snapshot.paramMap.get('id');
    this.getCountryById(id);

    this.isEditMode = true;

  }

  getCountryById(id: string) {
    if (id != null) {
      this.countryService.getCountryById(Number(id)).subscribe(
        /*data => {
          this.country = data;
        });*/
        {
          next: foundCountry => {
            this.country = foundCountry;
          },
          error: () => {
            console.log('error al obtener el pais');
          }
        }
      )
    };
  }

  saveCountry(): void {
    if(this.isEditMode) {
      this.countryService.updateCountry(this.country).subscribe(
        {
          next: () => {
            console.log('pais actualizado');
          },
          error: () => {
            console.log('error al guardar los cambios');
          }
        });

    } else {
      this.countryService.saveCountry(this.country).subscribe(() => {
        
      })
    }

    
    this.router.navigate(['']);
  }

}
