import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class HomeService {

  constructor(private http: HttpClient) {}

  apiData = signal<any>({
    data: [],
    isLoading: false,
  });


  getApiData() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe({
      next: (response:any) => {
        this.apiData.update((prev) => ({ ...prev, data: response}));
      },
      error: (error) => {
        console.error('Error fetching API data:', error);
      },
      complete: () => {
        setTimeout(() => {
          this.apiData.update((prev) => ({ ...prev, isLoading: false }));
        }, 2000);

        console.log('API data fetch complete');
      }
    });
  }



}
