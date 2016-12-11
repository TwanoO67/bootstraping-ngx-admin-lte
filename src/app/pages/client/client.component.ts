import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { Client } from '../../models/client';
import { ClientDAL } from '../../dal/client.dal';

@Component({
  providers: [ClientDAL],
  selector: 'app-client',
  styleUrls: ['./client.component.css'],
  templateUrl: './client.component.html'
})
export class ClientComponent implements OnInit {
  private clients: FirebaseListObservable<Array<Client>>;

  constructor(private dal: ClientDAL) { }

  public ngOnInit() {
    this.clients = this.dal.readAll();
  }

  private save = (client: Client): void => {
    this.dal.update(client.clientId, new Client(client.name, client.clientId, client.address));
  }

  private delete = (client: Client): void => {
    this.dal.delete(client);
  }

  private add = (): void => {
    this.dal.create(new Client());
  }
}
