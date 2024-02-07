import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private _http: HttpClient) {}

  create(data: any): Observable<any>{
    return this._http.post('http://localhost:5000/api/task', data);
  }

  update(id: number, data: any): Observable<any>{
    return this._http.put(`http://localhost:5000/api/task/${id}`, data);
  }

  getAll(): Observable<any>{
    return this._http.get('http://localhost:5000/api/task');
  }

  get(id: number): Observable<any>{
    return this._http.get(`http://localhost:5000/api/task/${id}`);
  }

  delete(id: number): Observable<any>{
    let url = "http://localhost:5000/api/task/" + id;
    return this._http.delete(url);
  }
}