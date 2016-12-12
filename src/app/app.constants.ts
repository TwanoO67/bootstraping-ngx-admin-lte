import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public server: string = 'http://test.weberantoine.fr/';
    public apiUrl: string = 'php-crud-api/api.php/';
    public serverWithApiUrl = this.server + this.apiUrl;
}
