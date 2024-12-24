import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.page.html',
  styleUrls: ['./film.page.scss'],
  standalone: false,
})
export class FilmPage implements OnInit {

  constructor(private adminService: AdminService) { }

  films: any[] = [];
  newFilmName: string = '';

  fetchFilms() {
    this.adminService.getFilms().subscribe((data) => {
      this.films = data;
    });
  }

  ngOnInit() {
    this.fetchFilms();
  }

}
