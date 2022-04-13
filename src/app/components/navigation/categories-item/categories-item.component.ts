import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories-item',
  templateUrl: './categories-item.component.html',
  styleUrls: ['./categories-item.component.scss']
})
export class CategoriesItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  images: string[] = ['https://ananas.vn/wp-content/uploads/Pro_AV00130_2.jpeg', 
  'https://ananas.vn/wp-content/uploads/Pro_AV00131_2.jpeg', 
  'https://ananas.vn/wp-content/uploads/Pro_AV00127_2.jpeg']

  titles: string[] = ['WHITE SHOES', 'YELLOW SHOES', 'BROWN SHOES']
}


