import { Component, inject, OnInit, signal } from '@angular/core';
import { HomeService } from '../home/home-service';
@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact implements OnInit {

  homeService = inject(HomeService);

  apiData = this.homeService.apiData

  ngOnInit() {
   this.getApiData();
  }

  getApiData() {
    this.homeService.getApiData();
  }

}
