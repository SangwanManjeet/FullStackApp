import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class MessageService {

  constructor(private http: Http) {
  }

  const
  BASE_URL = "http://localhost:1234";
  messages = [];


  getMessages() {
    this.http.get("http://localhost:1234/messages").subscribe((res) => {
      this.messages = res.json();
    });
  }

}
