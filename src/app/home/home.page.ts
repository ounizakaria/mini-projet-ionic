import { Component } from '@angular/core';
import { ConsapiService } from '../consapi.service';
import { Movies } from 'src/Models/Movis';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  allMoveis:any[]=[];

  constructor(public sv:ConsapiService) {
  }
  ngOnInit(): void {
    this.getdata();
  }
 getdata(){
  this.sv.getDetails().subscribe({
    next:(data)=>{
      this.allMoveis = data;
    },
    
  })
 }
}
