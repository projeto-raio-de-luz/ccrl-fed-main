import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Post } from '../core/models/post';

const options =({
  headers: new HttpHeaders({
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache'

  })
})

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private baseUrl = environment.api;
  private url = this.baseUrl + '/v1/instagram';



  constructor(private http: HttpClient) {}

  obterPosts(): Promise<Post[]> {
    const options = {}; // Caso você precise de headers ou outros parâmetros
    return firstValueFrom(this.http.get<Post[]>(`${this.url}/posts`));
  }
}
