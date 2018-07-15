import firebase from 'firebase';

export class AuthService{
    //Registers a user
    signup(email: string, password: string){
        return firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email,password);
    }
    //Signs in the user
    signin(email: string, password: string){
        return firebase.auth().signInWithEmailAndPassword(email,password);
    }
    //Logs the current user out
    logout(){
        firebase.auth().signOut();
    }
    //Gets the current user
    getActiveUser(){
        return firebase.auth().currentUser;
    }
}