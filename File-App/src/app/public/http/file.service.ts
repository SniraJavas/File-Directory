import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private httpClient: HttpClient) { }

  /**
   * This method returns students details
   */
  getFileInformation(): Observable<File[]>{
    return this.httpClient.get<File[]>(`${environment.baseURL}directories`);
  }
}
