import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SortDirection } from '@angular/material/sort';
import { AssignmentApi } from '../../models/assignment-api';

@Injectable()
export class AppService {
  constructor(private httpClient: HttpClient) {}

  // getSampleData(
  //   sort: string,
  //   order: SortDirection,
  //   page: number,
  //   q: string
  // ): Observable<GithubApi> {
  //   return this.httpClient.get<Github>(
  //     `https://api.github.com/search/issues?q=${q}&sort=${sort}&order=${order}&page=${
  //       page + 1
  //     }`
  //   );
  // }
  getData(): Observable<AssignmentApi> {
    return this.httpClient.get<AssignmentApi>(
      `https://localhost:5011/api/Assignment/find`
    );
  }
}
