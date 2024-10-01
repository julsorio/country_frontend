import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Country } from "../model/country.model";

@Injectable({
    providedIn: 'root'
  })
export class CountryService {
    private baseUrl = 'http://localhost:8080/demo/api/v1';

    constructor(private http: HttpClient) {

    }

    getCountries(): Observable<Country[]> {
        return this.http.get<Country[]>(`${this.baseUrl}/countries`);
    }

    getCountryById(id: number): Observable<Country> {
        return this.http.get<Country>(`${this.baseUrl}/country/${id}`);
    }

    updateCountry(id: number, country: Country): Observable<Country>  {
        return this.http.put<Country>(`${this.baseUrl}/country/${id}`, country, {headers: {'content-type': 'application/json'}} );
    }

    saveCountry(country: Country): Observable<Country>  {
        return this.http.post<Country>(`${this.baseUrl}/country`, country);
    }

    deleteCountry(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/country/${id}`);
    }
}