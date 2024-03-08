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

  private apiUrl = environment.apiUrl;

  fetchAllMovies() {
    const url = `${this.apiUrl}/movies`;
    return this.http.get(url);
  }

  fetchMovieById(movieId: number) {
    const url = `${this.apiUrl}/movie/${movieId}`;
    return this.http.get(url);
  }

  addMovie(movieDTO: any) {
    const url = `${this.apiUrl}/addMovie`;
    return this.http.post(url, movieDTO);
  }

  fetchUpcomingMovies() {
    const url = 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming'
    return this.http.get(url, this.rapidApiHeader);
  }

}
