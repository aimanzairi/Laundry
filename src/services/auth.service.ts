import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import AuthProvider = firebase.auth.AuthProvider;
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { FirebaseUserModel } from '../model/user.model'

@Injectable()
export class AuthService {
    private user: firebase.User;
    // usersnow: Observable<>;
    userCollectionRef: any;

	constructor(public afAuth: AngularFireAuth, public afs: AngularFirestore) {
		afAuth.authState.subscribe(user => {
            this.user = user;
            this.userCollectionRef = this.afs.collection('users');
		});
    }
    
    getCurrentUser() {
        return new Promise<any>((resolve, reject) => {
          firebase.auth().onAuthStateChanged(function(user) {
            let userModel = new FirebaseUserModel();
            if (user) {
              // userModel.name = user.displayName;
              // userModel.provider = user.providerData[0].providerId;
              console.log(user.uid);
              firebase
                .firestore()
                .collection("users")
                .doc(user.uid)
                .get()
                .then(async res => {
                  console.log(await res.data());
                  userModel.name = await res.data().username;
                  userModel.phone = await res.data().phone;
                  userModel.uid = await user.uid;
    
                  console.log(userModel);
                })
                .catch(function(error) {
                  console.log("error getting document", error);
                });
              return resolve(userModel);
            } else {
              reject("No user logged in");
            }
          });
        });
      }

	signInWithEmail(credentials) {
		console.log('Sign in with email');
		return this.afAuth.auth.signInWithEmailAndPassword(credentials.email,
			 credentials.password);
    }

    signUp(credentials, profile) {
        return this.afAuth.auth
          .createUserWithEmailAndPassword(credentials.email, credentials.password)
          .then(newUserCredential => {
              console.log(newUserCredential);
            this.userCollectionRef.doc(newUserCredential.uid).set({
                phone: profile.phone,
                username: profile.username,
                category: profile.category
            });
          });
      }
    
    signOut(): Promise<void> {
        return this.afAuth.auth.signOut();
      }

}