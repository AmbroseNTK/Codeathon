import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  constructor(public client: HttpClient, public config: ConfigService) { }

  public arrayToJson(array) {
    let json = {};
    for (let i = 0; i < array.length; i++) {
      json[i.toString()] = array[i];
    }
    return json;
  }

  public async create(data: any, coverImage, medalIcon) {
    let form = new FormData();
    let keys = Object.keys(data);
    for (let i = 0; i < keys.length; i++) {
      form.append(keys[i], data[keys[i]]);
    }
    form.append("coverImage", coverImage);
    form.append("medalIcon", medalIcon);

    let result = await this.client.post(this.config.config.backend + "/competition", form).toPromise();
    console.log(result);
  }
}
