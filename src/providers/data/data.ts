import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
 
@Injectable()
export class DataProvider {
    data: any; 
    constructor(public http: Http) {
 
    }
    //Loads and returns a resolved promise
    load(){
        if(this.data){
            return Promise.resolve(this.data);
        }
        return new Promise(resolve => {
            //Grabs questions from JSON file
            this.http.get('assets/data/question.json')
            .map(res => res.json()).subscribe(data => {
                this.data = data.questions;
                //Notifies that the data has been resolved
                resolve(this.data);
            }); 
        });
    }
}
