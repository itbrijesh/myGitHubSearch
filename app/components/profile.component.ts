import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { GithubService } from '../services/github.service';

@Component({
    moduleId: module.id,
    selector: 'profile',
    templateUrl: 'profile.component.html'
})
export class ProfileComponent {

    user: any[];
    repos: any[];
    myForm: FormGroup;
    searchuser: string;

    constructor( private _service: GithubService,
                 private _fb:FormBuilder )
    {
        this.myForm = _fb.group({
                searchuser: ['']  
        });

        this._service.getUser().subscribe(
            data=> {
                    console.log( data );
                    this.user = data;
            },
            error => { alert('Error while collecting user details!'); }
        );

        this._service.getRepos().subscribe(
            data => {
                    console.log(data);
                    this.repos = data;
            },
            error => { alert('Error while collection repos details!'); }
        );
    }

    searchUser() {
        
        console.log('Username to search in GitHub : ' + this.searchuser );
        this._service.setUsername( this.searchuser );

        this._service.getUser().subscribe(
            data=> {
                    console.log( data );
                    this.user = data;
            },
            //error => { alert('Error while collecting user details!'); }
        );

        this._service.getRepos().subscribe(
            data => {
                    console.log(data);
                    this.repos = data;
            },
            //error => { alert('Error while collection repos details!'); }
        );
    }
}