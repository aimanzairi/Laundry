import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import AuthProvider = firebase.auth.AuthProvider;
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

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

	signInWithEmail(credentials) {
		console.log('Sign in with email');
		return this.afAuth.auth.signInWithEmailAndPassword(credentials.email,
			 credentials.password);
    }

    signUp(credentials, profile) {
        return this.afAuth.auth
          .createUserWithEmailAndPassword(credentials.email, credentials.password)
          .then(newUserCredential => {
            this.userCollectionRef.doc(newUserCredential.user.uid).set({
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