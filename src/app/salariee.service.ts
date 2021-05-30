import { environment } from './../environments/environment';
import { Salariee } from './salariee';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalarieeService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http:HttpClient) { }
    public getSalariees(): Observable<Salariee[]>{
      return this.http.get<Salariee[]>(`${this.apiServerUrl}/salariee/all`);
    }
    public addSalariee(salariee: Salariee): Observable<Salariee>{
      return this.http.post<Salariee>(`${this.apiServerUrl}/salariee/add`, salariee);
    }
    public updateSalariee(salariee: Salariee): Observable<Salariee>{
      return this.http.put<Salariee>(`${this.apiServerUrl}/salariee/update`, salariee);
    }
    public deleteSalariee(salarieeId: number): Observable<void>{
      return this.http.delete<void>(`${this.apiServerUrl}/salariee/delete/${salarieeId}`);
    }

}
