import { Injectable } from '@angular/core';
import { FirebaseListObservable, AngularFire } from 'angularfire2';
import { Client } from '../models/client';
import { NotificationService } from '../services/notification.service';

@Injectable()
export class ClientDAL {
  constructor(private af: AngularFire, private notif: NotificationService) { }

  public readAll = (): FirebaseListObservable<Array<Client>> => {
    return this.af.database.list('clients');
  }

  public read = (id: string): FirebaseListObservable<Client[]> => {
    return this.af.database.list('clients', {
      query: {
        equalTo: id,
        orderByChild: 'clientId'
      }
    });
  }

  public create = (newClient: Client): void => {
    this.af.database.list('clients').push(newClient).then(resp =>
      this.notif.success('New client has been added')
    );
  }

  public update = (id: string, client: Client): void => {
    this.af.database.list('clients').update(id, client).then(resp =>
      this.notif.success('Client ' + client.name + ' has been updated')
    );
  }

  public delete = (client: Client): void => {
    this.af.database.list('clients').remove(client as any).then(resp =>
      this.notif.success('Client ' + client.name + ' has been deleted')
    );
  }
}
