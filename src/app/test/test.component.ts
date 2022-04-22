import { PostService } from './../../../post-service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  dataList = null;
  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getListPosts().subscribe((res) => {
      this.dataList = res;
    })
  }
  
}
