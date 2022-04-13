import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { BehaviorSubject, merge, of } from 'rxjs';
import {
  startWith,
  switchMap,
  catchError,
  map,
  debounceTime,
  distinctUntilChanged,
} from 'rxjs/operators';
import { AppService } from '../../../core/services/appservice/app.service';

export interface GithubApi {
  items: GithubIssue[];
  total_count: number;
}

export interface GithubIssue {
  created_at: string;
  number: string;
  state: string;
  title: string;
}
export interface AssignmentItem {
  id: string;
  assetCode: string;
  assetName: string;
  assignedTo: string;
  assignedBy: string;
  assignedDate: string;
  state: string;
}
export interface AssignmentApi {
  currentPage: number;
  totalItems: number;
  totalPages: number;
  items: AssignmentItem[];
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'assetCode',
    'assetName',
    'assignedDate',
    'state',
  ];
  data: AssignmentItem[] = [];
  @ViewChild(MatSort) sort!: MatSort;
  term$ = new BehaviorSubject<string>('');
  resultsLength = 0;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private appService: AppService) {}

  ngAfterViewInit() {
    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));
    console.log(this.appService!.getData());
    merge(
      this.sort.sortChange,
      this.term$.pipe(debounceTime(1000), distinctUntilChanged()),
      this.paginator.page
    )
      .pipe(
        startWith({}),
        switchMap((searchTerm) => {
          console.log(this.sort.active);
          console.log(this.sort.direction);
          console.log(this.paginator.pageIndex);
          return (
            this.appService!.getData()
              // this.sort.active,
              // this.sort.direction,
              // this.paginator.pageIndex,
              // searchTerm && typeof searchTerm == 'string'
              //   ? searchTerm.toString()
              //   : 'repo:angular/components'
              //()
              .pipe(catchError(() => of(null)))
          );
        }),
        map((data) => {
          console.log(data);
          if (data === null) {
            return [];
          }

          this.resultsLength = data.totalPages;
          return data.items;
        })
      )
      .subscribe((data) => (this.data = data));
  }
}
