import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  private baseURL =  'https://gist.githubusercontent.com/manzooralam/4b6aca6e1aa794c57c0cb6e7a2605109/raw/694828a0b1084ef63ff507ed85de3db6e3931e99/list.json';
         

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get(this.baseURL)
  }

  userInfo()
  {
    return new Promise((resolve, reject) => {
      this.http
        .get(' https://gist.githubusercontent.com/manzooralam/4b6aca6e1aa794c57c0cb6e7a2605109/raw/694828a0b1084ef63ff507ed85de3db6e3931e99/list.json')
        .subscribe((res) => {
          if (res) {
            resolve(res);
          }
        });
    });
  }}
  
