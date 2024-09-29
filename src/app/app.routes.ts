import { Routes } from '@angular/router';
import { CountryListComponent } from './components/country-list/country-list.component';
import { CountryFormComponent } from './components/country-form/country-form.component';

export const routes: Routes = [
    {path: '', component: CountryListComponent},
    {path: 'edit/:id', component: CountryFormComponent},
    {path: 'add', component: CountryFormComponent}
];
