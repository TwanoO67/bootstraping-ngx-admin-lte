import { Component, OnInit } from '@angular/core';
import {Message} from "../../_models/message";

@Component({
  moduleId: module.id,
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
