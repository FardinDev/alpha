import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }
  public id: string;

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
     console.log(this.id);
  }

}
