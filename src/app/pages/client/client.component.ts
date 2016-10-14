import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable, AngularFire } from 'angularfire2';
import { Client } from '../../models/client';
import * as _ from 'lodash'; 

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  private clients: FirebaseListObservable<Array<Client>>;

  constructor(private af: AngularFire) { }

  ngOnInit() {
    this.clients = this.af.database.list('clients');
  }

  private save = (client: Client): void => {
    let clientCopy = _.cloneDeep(client);
    this.clients.update(client.$key, clientCopy);
  }

}
