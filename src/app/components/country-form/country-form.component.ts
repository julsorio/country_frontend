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

  country: any = {
    name: ''
  }

  isEditMode: boolean = false;

  constructor(private countryService: CountryService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    const id: any = this.route.snapshot.paramMap.get('id');
    console.log("init id " + id);
    if(id != null) {
      this.getCountryById(id);
      this.isEditMode = true;
    } else {
      this.isEditMode = false;
    }

    console.log("edit" + this.isEditMode);

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
      this.countryService.updateCountry(this.country.id, this.country).subscribe(
        {
          next: (res) => {
            console.log(res);
          },
          error: (e) => {
            console.log(e);
          }
        });

    } else {
      this.countryService.saveCountry(this.country).subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (e) => {
          console.log(e);
        }
      })
    }

    
    this.router.navigate(['']);
  }

  deleteCountry() {
    console.log("delete " + this.country.id);
    /*this.countryService.deleteCountry(id).subscribe({
      next: () => {

      },
      error: () => {

      }
    });*/
    this.countryService.deleteCountry(this.country.id).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (e) => {
        console.log(e);
      }
    });
    
    this.router.navigate(['']);
  }

}
