import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movies } from 'src/Models/Movis';

@Injectable({
  providedIn: 'root'
})
export class ConsapiService {
  private apiKey: string = '418162be';
  
  constructor(private http:HttpClient) {
   }

   getDetails() {
    return this.http.get<Movies>(`https://www.omdbapi.com/&plot=full&apikey=${this.apiKey}`);
  }
}
