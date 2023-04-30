import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-allinformation',
  templateUrl: './allinformation.component.html',
  styleUrls: ['./allinformation.component.scss']
})
export class AllinformationComponent implements OnInit {
  posts: any[] = [];


  constructor(private mainService: MainService) { }


  ngOnInit(): void {
    this.mainService.allInformation().subscribe(
      posts => this.posts = posts
    )
  }

  delete(post: any) {
    this.mainService.deletePost(post.id).subscribe(() => {
      console.log('Post deleted successfully!');
    });
  }


}
