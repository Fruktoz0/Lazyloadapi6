import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }


  firstTenTitle(): Observable<any> {
    return this.http.get<any[]>(`https://jsonplaceholder.typicode.com/users/1/posts`)
    .pipe(
      map(posts => posts.slice(0, 10).map(post => post.title))
    );
  }

  allInformation(): Observable<any> {
    return this.http.get<any[]>(`https://jsonplaceholder.typicode.com/users/1/posts`)
  }

  deletePost(id: number): Observable<any> {
    return this.http.delete<any[]>(`https://jsonplaceholder.typicode.com/users/1/posts/${id}`);
  }

}
