import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  searchValue: string = ""
  movieList: any[] = []

  constructor(private http: HttpClient){

  }

  fetchupcommingMovies() {
    const options = {
      method: 'GET',
      url: 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming',
      header: {headers: {
        'X-RapidAPI-Key': '',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
      }}
    };
    

    this.http.get(options.url, options.header).subscribe((res:any) => {
      this.movieList = res.results.slice(0, 6);
      console.log(this.movieList)
    })
  }
}
