import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  titles: string[] = [];
  


  constructor(public main: MainService){}

  ngOnInit(): void {
    this.main.firstTenTitle().subscribe(title => this.titles = title)
  
  }
}
