import { Component, OnInit } from '@angular/core';
import {Message} from "../../models/message";

@Component({
  selector: '.tasksBox',
  inputs: ['user'],
  templateUrl: 'tasks-box.component.html',
  styleUrls: ['tasks-box.component.css']
})
export class TasksBoxComponent implements OnInit {
  private messages: Message[];

  constructor() {}

  ngOnInit() {
  }

}
