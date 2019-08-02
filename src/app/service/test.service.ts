import { Injectable } from '@angular/core';
import { mockData } from './mock';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  readonly url = 'assets/datasource.json';

  constructor(
    private _http: HttpClient
  ) { }
  public getJson() {
    return mockData.testData;
  }

  public getSource() {
    return this._http.get(this.url);
  }

  getReleases() {
    return this._http.get('https://dc-test-repo1.eng.vmware.com:8443/dcr/rest/apix/releases');
  }
}
