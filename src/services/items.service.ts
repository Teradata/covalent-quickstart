import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpInterceptorService } from '@covalent/http';
import { MOCK_API } from '../config/api.config';

@Injectable()
export class ItemsService {

  private staticData: string = 'data/items.json';
  private mockApiData: string = MOCK_API;

  constructor(private _http: HttpInterceptorService) {}

  staticQuery(): any {
    return this._http.get(this.staticData)
    .map((res: Response) => {
      return res.json();
    });
  }

  staticGet(id: string): any {
    return this._http.get(this.staticData)
    .map((res: Response) => {
      let item: any;
      res.json().forEach((s: any) => {
        if (s.item_id === id) {
          item = s;
        }
      });
      return item;
    });
  }

  query(): any {
    return this._http.get(this.mockApiData)
    .map((res: Response) => {
      return res.json();
    });
  }

  get(id: string): any {
    return this._http.get(this.mockApiData)
    .map((res: Response) => {
      let item: any;
      res.json().forEach((s: any) => {
        if (s.item_id === id) {
          item = s;
        }
      });
      return item;
    });
  }
}
