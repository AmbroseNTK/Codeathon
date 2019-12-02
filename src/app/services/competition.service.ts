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

    let result = await this.client.post(this.config.config.backend + "/competition/new", form).toPromise();
    return result;
  };

  public async update(data: any, coverImage, medalIcon) {
    let form = new FormData();
    let keys = Object.keys(data);
    for (let i = 0; i < keys.length; i++) {
      form.append(keys[i], data[keys[i]]);
    }
    form.append("coverImage", coverImage);
    form.append("medalIcon", medalIcon);

    let result = await this.client.post(this.config.config.backend + "/competition/update", form).toPromise();
    return result;
  };


  public get(ownerId) {
    return new Promise((resolve, reject) => {
      this.config.config$.subscribe(config => {
        this.client.post(config.backend + "/competition/list", {
          ownerId: ownerId
        }).subscribe(data => resolve(data));
      })
    })

  }

  public delete(id, ownerId) {
    return new Promise((resolve, reject) => {
      this.config.config$.subscribe(config => {
        this.client.post(config.backend + "/competition/delete", {
          id: id,
          ownerId: ownerId
        }).subscribe(data => resolve(data));
      })
    })
  }

  public getMedal(id) {
    return new Promise<string>((resolve, reject) => {
      this.config.config$.subscribe(config => {
        try {
          resolve(config.backend + "/resources/images/competition/" + id + "/medalIcon");
        }
        catch (e) {
          reject("File not found");
        }
      })
    })
  }

  public getCover(id) {
    return new Promise<string>((resolve, reject) => {
      this.config.config$.subscribe(config => {
        try {
          resolve(config.backend + "/resources/images/competition/" + id + "/coverImage");
        }
        catch (e) {
          reject("File not found");
        }
      })
    })
  }

}
