import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SortDirection } from '@angular/material/sort';
import { Observable } from 'rxjs';
import { AssignmentApi } from '../../models/assignment-api';
import { AssignmentItem } from '../../models/assignment-item';

@Injectable()
export class HomeService {
  constructor(private httpClient: HttpClient) {}

  // getSampleData(
  //   sort: string,
  //   order: SortDirection,
  //   page: number,
  //   q: string
  // ): Observable<GithubApi> {
  //   return this.httpClient.get<GithubApi>(
  //     `https://api.github.com/search/issues?q=${q}&sort=${sort}&order=${order}&page=${
  //       page + 1
  //     }`
  //   );
  // }
  getData(userid: string): Observable<AssignmentItem[]> {
    return this.httpClient.get<AssignmentItem[]>(
      `https://localhost:5011/api/Assignment/user/${userid}`
    );
  }
}
