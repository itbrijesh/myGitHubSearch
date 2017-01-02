import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { GithubService } from '../services/github.service';

@Component({
    moduleId: module.id,
    selector: 'profile',
    templateUrl: 'profile.component.html'
})
export class ProfileComponent {

    constructor( private _service: GithubService )
    {
        this._service.getUser().subscribe(
            data=> {
                    console.log( data );
            },
            error => {
                alert('Error while collecting user details!');
            }
        );
    }
}