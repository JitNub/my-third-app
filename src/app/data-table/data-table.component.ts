import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
})
export class DataTableComponent implements OnInit {
  data: any;
  apiAddress = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  fetchData() {
    this.http.get(this.apiAddress).subscribe((data) => {
      this.data = data;
    });
  }
}
