import { Injectable } from '@angular/core';
import { ToasterService, Toast } from 'angular2-toaster/angular2-toaster';

@Injectable()
export class NotificationService {
  constructor(private toastr: ToasterService) { }

  public Success = (body: string, title = 'Operation successful'): void => {
    this.toastr.pop({ body: body, title: title, type: 'success' });
  }

  public Error = (body: string, title = 'An error occured'): void => {
    this.toastr.pop({ body: body, title: title, type: 'error' });
  }

  public Warning = (body: string, title = 'Something went wrong'): void => {
    this.toastr.pop({ body: body, title: title, type: 'warning' });
  }
}
