import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
  standalone: false,
})
export class AdminPage implements OnInit {
  films: any[] = [];
  newFilmName: string = '';
  users: any[] = [];

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.fetchUsers();
  }

  // Fetch and subscribe to the list of films
  

  // Add a new film
  addFilm() {
    if (this.newFilmName.trim()) {
      this.adminService.addFilm({ name: this.newFilmName }).then(() => {
        alert('Film ajouté avec succès !');
        this.newFilmName = '';
        // No need to manually fetch films here; the subscription will update the list
      });
    } else {
      alert('Veuillez entrer un nom de film.');
    }
  }

  // Deactivate a user
  deactivateUser(userId: string) {
    this.adminService.deactivateUser(userId).then(() => {
      alert('Utilisateur désactivé avec succès !');
      this.fetchUsers();
    });
  }

  // Fetch and subscribe to the list of users
  fetchUsers() {
    this.adminService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }
}
