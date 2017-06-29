import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public contactList: any;

  constructor(public navCtrl: NavController) {
    this.contactList = [{
      id: 11,
      displayName: "Nam 1",

    }, {
      id: 12,
      displayName: "Nam 2"
    }, {
      id: 13,
      displayName: "Nam 3"
    }, {
      id: 14,
      displayName: "Nam 4"
    }, {
      id: 15,
      displayName: "Nam 5"
    }, {
      id: 15,
      displayName: "Nam 5"
    }, {
      id: 15,
      displayName: "Nam 5"
    }, {
      id: 15,
      displayName: "Nam 5"
    }, {
      id: 15,
      displayName: "Nam 5"
    }, {
      id: 15,
      displayName: "Nam 5"
    }, {
      id: 15,
      displayName: "Nam 5"
    }, {
      id: 15,
      displayName: "Nam 5"
    }, {
      id: 15,
      displayName: "Nam 5"
    }, {
      id: 15,
      displayName: "Nam 5"
    }, {
      id: 15,
      displayName: "Nam 5"
    }, {
      id: 15,
      displayName: "Nam 5"
    }, {
      id: 15,
      displayName: "Nam 5"
    }];
  }

}
