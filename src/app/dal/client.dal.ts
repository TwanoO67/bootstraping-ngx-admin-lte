import { Injectable } from '@angular/core';
import { FirebaseListObservable, AngularFire } from 'angularfire2';
import { Client } from '../models/client';
import { ToasterService, Toast } from 'angular2-toaster/angular2-toaster';

@Injectable()
export class ClientDAL {
	constructor(private af: AngularFire, private toastr: ToasterService) {}

	public readAll = (): FirebaseListObservable<Array<Client>> => {
		return this.af.database.list('clients');
	}

	public read = (id: string): FirebaseListObservable<Client[]> => {
		return this.af.database.list('clients', {
			query: {
				orderByChild: 'clientId',
				equalTo: id
			}
		});
	}

	public create = (newClient: Client): void => {
		let toast:Toast = { title: 'Operation successful', type: 'success', body: 'New client has been added' };
		this.af.database.list('clients').push(newClient).then( resp => this.toastr.pop(toast));

	}

	public update = (id: string, client: Client): void => {
		let toast:Toast = { title: 'Operation successful', type: 'success', body: 'Client ' + client.name + ' has been updated' };
		this.af.database.list('clients').update(id, client).then(resp => this.toastr.pop(toast));
	}

	public delete = (client:Client): void => {
		let toast:Toast = { title: 'Operation successful', type: 'success', body: 'Client ' + client.name + ' has been deleted' };
		this.af.database.list('clients').remove(client as any).then(resp => this.toastr.pop(toast));
	}
}