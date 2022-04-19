import { Component, OnInit } from '@angular/core';
import { Sale, Sales } from 'data.sale';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class TrendingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  sales: Sale[] = Sales;
  
}
