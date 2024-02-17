import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  rapidApiHeader: any = {
    headers: {
      'X-RapidAPI-Key': environment.rapidApi_Key,
      'X-RapidAPI-Host': environment.rapidApi_Host,
    },
  };

  fetchUpcomingMovies() {
    const url = 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming'
    return this.http.get(url, this.rapidApiHeader);
  }
}
