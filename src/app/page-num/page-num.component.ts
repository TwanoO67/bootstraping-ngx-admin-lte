import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute}  from '@angular/router';

@Component({
  selector: 'app-page-num',
  templateUrl: './page-num.component.html',
  styleUrls: ['./page-num.component.css']
})
export class PageNumComponent implements OnInit {
  private id: number = 0;

  constructor(
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    //when calling routes change
    this._route.params.subscribe((data) =>{
      this.id = data['id'];
    })
  }

}
