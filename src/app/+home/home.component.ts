import { Component, OnInit } from '@angular/core';
import {AlertComponent, DATEPICKER_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
import {FORM_DIRECTIVES} from '@angular/forms';
import {CORE_DIRECTIVES} from '@angular/common';
import * as moment from 'moment';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [AlertComponent, DATEPICKER_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES ]
})
export class HomeComponent implements OnInit {
  public date: Date = new Date();

  constructor() {}

  ngOnInit() {
  }

}
