import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-data-table-object',
  templateUrl: './data-table-object.component.html',
  styleUrls: ['./data-table-object.component.css'],
})
export class DataTableObjectComponent implements OnInit {
  data: any;
  apiAddress = '';
  displayedColumns: string[] | undefined;

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  fetchData() {
    this.http.get(this.apiAddress).subscribe((data) => {
      this.data = data;
      this.displayedColumns = Object.keys(this.data);
    });
  }
}
