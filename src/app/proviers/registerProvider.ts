import { HttpClient }   from '@angular/common/http';
import { Injectable }   from '@angular/core';


@Injectable()
export class RegisterProvider{

    urlApi:string="https://back-selfcareapp.herokuapp.com/selfcare/";
    urlLocal= "http://localhost:3000/api/login";
    url=this.urlApi;
	resp: any;
    
    constructor(public http: HttpClient){
        console.log('Hello register provider');
    }
}