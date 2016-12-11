import { Component, OnInit } from '@angular/core';
import { Message } from '../../models/message';

@Component({
  inputs: ['user'],
  selector: '.tasksBox',
  styleUrls: ['./tasks-box.component.css'],
  templateUrl: './tasks-box.component.html'
})
export class TasksBoxComponent implements OnInit {
  private messages: Message[];

  constructor() { }

  public ngOnInit() {
  }

}
