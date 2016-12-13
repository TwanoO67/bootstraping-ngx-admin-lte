import { Component, OnInit, OnDestroy } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { Client } from '../../models/client';
import { ClientDAL } from '../../dal/client.dal';
import { BreadcrumbService } from '../../services/breadcrumb.service';

@Component({
  providers: [ClientDAL],
  selector: 'app-client',
  styleUrls: ['./client.component.css'],
  templateUrl: './client.component.html'
})
export class ClientComponent implements OnInit, OnDestroy {
  private clients: FirebaseListObservable<Array<Client>>;

  constructor(private dal: ClientDAL, private breadServ: BreadcrumbService) {
    // TODO
  }

  public ngOnInit() {
    this.clients = this.dal.readAll();
    this.breadServ.set({
      description: 'This is our Client page',
      display: true,
      levels: [
        {
          icon: 'dashboard',
          link: ['/'],
          title: 'Home'
        },
        {
          icon: 'clock-o',
          link: ['/client'],
          title: 'Client'
        }
      ]
    });

  }

  public ngOnDestroy() {
    this.breadServ.clear();
    this.clients = null;
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
