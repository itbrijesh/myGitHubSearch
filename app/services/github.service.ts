import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import  'rxjs/add/operator/map';


@Injectable()
export class GithubService {
    private username: string;
    private client_id = '5752cd63e14ca9c9db1a';
    private sceret_id = '54a7f906e777f734e80cc132fe8c3e50794bdab6';

    constructor( private _http: Http )
    {
        console.log( 'GithubService is ready !!!' );
        this.username = 'itbrijesh';
    }

    getUser(){
        console.log('Calling getUser API...');
        let url = 'https://api.github.com/users/'+ this.username + 
                  '?client_id=' + this.client_id + 
                  '&sceret_id=' + this.sceret_id;
        
        return this._http.get( url ).map( data => data.json() );
    }

    getRepos(){
        console.log('Calling getRepo API...');
        let url = 'https://api.github.com/users/'+ this.username.trim() + '/repos'
                  '?client_id=' + this.client_id + 
                  '&sceret_id=' + this.sceret_id;
        
        return this._http.get( url ).map( data => data.json() );
    }
    
    setUsername(username: string) {
        this.username = username;
    }
}