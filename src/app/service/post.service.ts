import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostModel } from '../core/models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private baseUrl = environment.api;
  private url = this.baseUrl + '/v1/instagram/posts';

  constructor(private http: HttpClient) {}

  obterPosts(): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(this.url);
  }
}
