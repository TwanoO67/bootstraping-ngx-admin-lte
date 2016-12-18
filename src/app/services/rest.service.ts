import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Configuration } from '../app.constants';

@Injectable()
export class RestService {
    public modelName: string;
    private headers: Headers;

    // cache data
    public lastGetAll: Array<any>;
    public lastGet: any;

    constructor(private http: Http, private config: Configuration) {
        this.modelName = 'to-configure';

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    // HELPERS
    public getAllFromLS(maxtime = 0): Array<any> {
      let json = localStorage.getItem( 'rest_all_' + this.modelName );
      if ( json ) {
        let obj = JSON.parse(json);
        if ( obj && (obj.date < (Date.now() - maxtime) ) ) {
          return obj;
        }
      }
    }


    public getFromCache(id): any {
      if (this.lastGetAll) {
        return this.lastGetAll.find((unit) => unit.id === id);
      } else {
        return null;
      }
    }

    private getActionUrl() {
      return this.config.serverWithApiUrl + this.modelName + '/';
    }


    // REST functions
    public getAll(): Observable<any[]> {
        return this.http.get(this.getActionUrl())
            .map((response: Response) => {
              // getting an array having the same name as the model
              let data = response.json()[this.modelName];
              // transforming the array from indexed to associative
              let tab = data.records.map((elem) => {
                let unit = {};
                // using the columns order and number to rebuild the object
                data.columns.forEach( (champ, index) => {
                  unit[champ] = elem[index];
                });
                return unit;
              });
              this.lastGetAll = tab;
              let obj = {
                data: tab,
                date: Date.now()
              };
              localStorage.setItem( 'rest_all_' + this.modelName, JSON.stringify(obj) );
              return tab;
            })
            .catch(this.handleError);
    }

    public get(id: number): Observable<any> {
        return this.http.get(this.getActionUrl() + id)
            .map((response: Response) => {
              let data = response.json();
              this.lastGet = data;
              return data;
            })
            .catch(this.handleError);
    }

    public add(item: any): Observable<number> {
        let toAdd = JSON.stringify(item);

        return this.http.post(this.getActionUrl(), toAdd, { headers: this.headers })
            .map((response: Response) => response.json())
            .catch(this.handleError);
    }

    public addAll(tab: Array<any>): Observable<Array<number>> {
      let toAdd = JSON.stringify(tab);

      return this.http.post(this.getActionUrl(), toAdd, { headers: this.headers })
          .map((response: Response) => response.json())
          .catch(this.handleError);
    }

    public update(id: number, itemToUpdate: any): Observable<number> {
        return this.http.put(this.getActionUrl() + id, JSON.stringify(itemToUpdate), { headers: this.headers })
            .map((response: Response) => response.json())
            .catch(this.handleError);
    }

    public delete(id: number): Observable<Response> {
        return this.http.delete(this.getActionUrl() + id)
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
