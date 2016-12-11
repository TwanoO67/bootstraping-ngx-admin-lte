import { Injectable } from '@angular/core';
import { ToasterService, Toast } from 'angular2-toaster/angular2-toaster';

@Injectable()
export class NotificationService {
  constructor(private toastr: ToasterService) { }

  public success = (body: string, title = 'Operation successful'): void => {
    this.toastr.pop({ body: body, title: title, type: 'success' });
  }

  public error = (body: string, title = 'An error occured'): void => {
    this.toastr.pop({ body: body, title: title, type: 'error' });
  }

  public warning = (body: string, title = 'Something went wrong'): void => {
    this.toastr.pop({ body: body, title: title, type: 'warning' });
  }
}
