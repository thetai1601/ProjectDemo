import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root',
})
export class PostService {
  
  private contactUrl = 'https://62611813f429c20deb9a8265.mockapi.io/api/v1/users';
  constructor(private httpClient: HttpClient) {}

  getListPosts(): Observable<any> {
    return this.httpClient.get<any>(this.contactUrl)
  }


  // postListPost(newPost: Post): Observable<any> {
  //   return this.httpClient.post<any>(this.contactUrl, newPost, httpOptions).pipe(
  //     tap()
  //   )
  // }
}