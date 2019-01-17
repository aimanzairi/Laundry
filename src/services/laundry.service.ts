import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { laundry } from '../model/laundry.model';
import { order } from '../model/order.model';

@Injectable()
export class LaundryService {

    constructor(public afs: AngularFirestore){

    }

    listlaundry(){
        let laundrylist = [];
        firebase.firestore().collection("laundry").get().then(async res=>{
            // console.log(res);
            await res.forEach(async element=>{
                let laundrymodel = new laundry();

                laundrymodel.address = await element.data().address;
                laundrymodel.image = await element.data().image;
                laundrymodel.owner = await element.data().owner;
                laundrymodel.name = await element.data().name;
                laundrymodel.phone = await element.data().phone;
                laundrymodel.pricekg = await element.data().pricekg;
                laundrymodel.pricekm = await element.data().pricekm;
                laundrymodel.laundrid = await element.id;

                console.log(laundrymodel);

                laundrylist.push(laundrymodel);
            });
        });

        return laundrylist;
    }

    listrequest(){
        let requestlist = [];
        firebase.firestore().collection("order").where("runner","==",null).get().then(async res=>{
            await res.forEach(async element=>{
              let requestdtl = new order();
              console.log(element.data());

              requestdtl.deliver = await element.data().deliver;
              requestdtl.pickup = await element.data().pickup;
              requestdtl.Status = await element.data().Status;
              requestdtl.Total_estimation_kg = await element.data().Total_estimation_kg;
              requestdtl.bookeradd = await element.data().pickupadd;

              //get user detail
              firebase.firestore().doc(await element.data().users).get().then(async res=>{
                  console.log(res.data());
                  requestdtl.bookername = await res.data().username;
                  requestdtl.bookerphone = await res.data().phone;
              });

              //get laundry detail
              firebase.firestore().doc(await element.data().laundry).get().then(async res=>{
                  console.log(res.data());
                  requestdtl.laundryadd = await res.data().address;
                  requestdtl.laundryname = await res.data().name;
              });
              requestlist.push(requestdtl);
            });
          });

        return requestlist;
    }
}