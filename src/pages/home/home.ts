import { ContactDetail } from './../contact-detail/contact-detail';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public contactList: any;

  constructor(
    public navCtrl: NavController
    , public modalCtrl: ModalController
  ) {
    this.contactList = [{
      id: 11,
      displayName: "Nam 1",
      nickname: "Nam Nguyen",
      name: { formatted: "Nam Nguyen", givenName: "Nam", familyName: "Nguyen", middleName: "Vu", honorificPrefix: "The contact's prefix (example Mr. or Dr.) (DOMString)", honorificSuffix: "The contact's suffix (example Esq.). (DOMString)" },
      phoneNumbers: [{ type: "work", value: "0917360946", pref: true }, { type: "home", value: "0917360946", pref: false }],
      emails: [{ type: "work", value: "sadman289@gmail.com", pref: true }],
      addresses: [{ pref: true, type: "home", formatted: "The full address formatted for display. (DOMString)", streetAddress: "The full street address. (DOMString)", locality: "The city or locality. (DOMString)", region: "The state or region. (DOMString)", postalCode: "The zip code or postal code. (DOMString)", country: "The country name. (DOMString)" }],
      ims: [{ type: "skype", value: "namnguyen289", pref: true }],
      organizations: [{ pref: true, type: "home", name: "The name of the organization. (DOMString)", department: " The department the contract works for. (DOMString)", title: "The contact's title at the organization. (DOMString)" }],
      birthday: "",
      note: "note",
      photos: [],
      categories: [],
      urls: [{ type: "work", value: "sadman289@gmail.com", pref: true }]
    }, {
      id: 12,
      displayName: "Nam 2",
      phoneNumbers: [{
        type: "work",
        value: "0917360946",
        pref: true
      }, {
        type: "home",
        value: "0917360946",
        pref: false
      }]
    }, {
      id: 13,
      displayName: "Nam 3",
      phoneNumbers: [{
        type: "work",
        value: "0917360946",
        pref: true
      }, {
        type: "home",
        value: "0917360946",
        pref: false
      }]
    }, {
      id: 14,
      displayName: "Nam 4",
      phoneNumbers: [{
        type: "work",
        value: "0917360946",
        pref: true
      }, {
        type: "home",
        value: "0917360946",
        pref: false
      }]
    }, {
      id: 15,
      displayName: "Nam 5",
      phoneNumbers: [{
        type: "work",
        value: "0917360946",
        pref: true
      }, {
        type: "home",
        value: "0917360946",
        pref: false
      }]
    }, {
      id: 15,
      displayName: "Nam 5",
      phoneNumbers: [{
        type: "work",
        value: "0917360946",
        pref: true
      }, {
        type: "home",
        value: "0917360946",
        pref: false
      }]
    }, {
      id: 15,
      displayName: "Nam 5",
      phoneNumbers: [{
        type: "work",
        value: "0917360946",
        pref: true
      }, {
        type: "home",
        value: "0917360946",
        pref: false
      }]
    }, {
      id: 15,
      displayName: "Nam 5",
      phoneNumbers: [{
        type: "work",
        value: "0917360946",
        pref: true
      }, {
        type: "home",
        value: "0917360946",
        pref: false
      }]
    }, {
      id: 15,
      displayName: "Nam 5",
      phoneNumbers: [{
        type: "work",
        value: "0917360946",
        pref: true
      }, {
        type: "home",
        value: "0917360946",
        pref: false
      }]
    }, {
      id: 15,
      displayName: "Nam 5",
      phoneNumbers: [{
        type: "work",
        value: "0917360946",
        pref: true
      }, {
        type: "home",
        value: "0917360946",
        pref: false
      }]
    }, {
      id: 15,
      displayName: "Nam 5",
      phoneNumbers: [{
        type: "work",
        value: "0917360946",
        pref: true
      }, {
        type: "home",
        value: "0917360946",
        pref: false
      }]
    }, {
      id: 15,
      displayName: "Nam 5",
      phoneNumbers: [{
        type: "work",
        value: "0917360946",
        pref: true
      }, {
        type: "home",
        value: "0917360946",
        pref: false
      }]
    }, {
      id: 15,
      displayName: "Nam 5",
      phoneNumbers: [{
        type: "work",
        value: "0917360946",
        pref: true
      }, {
        type: "home",
        value: "0917360946",
        pref: false
      }]
    }, {
      id: 15,
      displayName: "Nam 5",
      phoneNumbers: [{
        type: "work",
        value: "0917360946",
        pref: true
      }, {
        type: "home",
        value: "0917360946",
        pref: false
      }]
    }, {
      id: 15,
      displayName: "Nam 5",
      phoneNumbers: [{
        type: "work",
        value: "0917360946",
        pref: true
      }, {
        type: "home",
        value: "0917360946",
        pref: false
      }]
    }, {
      id: 15,
      displayName: "Nam 5",
      phoneNumbers: [{
        type: "work",
        value: "0917360946",
        pref: true
      }, {
        type: "home",
        value: "0917360946",
        pref: false
      }]
    }, {
      id: 15,
      displayName: "Nam 5",
      phoneNumbers: [{
        type: "work",
        value: "0917360946",
        pref: false
      }, {
        type: "home",
        value: "0917360946",
        pref: false
      }]
    }];
  }
  showDetail(event, item) {
    let modal = this.modalCtrl.create(ContactDetail, { item: item });
    modal.onDidDismiss(data => {
      console.log(data);
    });
    modal.present();
  }
}
