import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable()
export class BreadcrumbService {
  public current: ReplaySubject<any>;
  private initialData: any = {
    description: '',
    display: false,
    header : '',

    levels: [
      {
        icon: 'clock-o',
        link: ['/'],
        title: 'Default'
      }
    ]
  };

  constructor() {
    this.current = new ReplaySubject(1);
    this.clear();
  }

  public set(data: any) {
    this.current.next(data);
  }

  public clear() {
    this.set(this.initialData);
  }

}
