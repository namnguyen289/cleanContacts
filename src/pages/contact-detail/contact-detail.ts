import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'contact-detail',
  templateUrl: 'contact-detail.html'
})
export class ContactDetail {
  public selectedItem: any;
  constructor(public params: NavParams, public viewCtrl: ViewController) {
    this.selectedItem = this.params.get("item");
    // console.log('UserId', JSON.stringify(params.get('item')));
  }
  dismiss() {
    let data = { 'foo': 'bar' };
    this.viewCtrl.dismiss(data);
  }
}
