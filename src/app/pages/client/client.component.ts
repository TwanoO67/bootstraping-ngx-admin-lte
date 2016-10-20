import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { Client } from '../../models/client';
import { ClientDAL } from '../../dal/client.dal';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
  providers: [ClientDAL]
})
export class ClientComponent implements OnInit {
  private clients: FirebaseListObservable<Array<Client>>;

  constructor(private dal: ClientDAL) { }

  ngOnInit() {
    this.clients = this.dal.readAll();
  }

  private save = (client: Client): void => {   
    this.dal.update(client['$key'], new Client(client.name, client.clientId, client.address));
  }

  private delete = (client: Client): void => {
    this.dal.delete(client);
  }

  private add = (): void => {
    this.dal.create(new Client());
  }
}
