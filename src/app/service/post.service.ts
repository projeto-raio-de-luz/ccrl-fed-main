import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Post } from '../core/models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private baseUrl = environment.api;
  private url = this.baseUrl + '/v1/instagram';

  constructor(private http: HttpClient) {}

  obterPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.url}/posts`);
  }
}
