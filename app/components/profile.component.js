"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var github_service_1 = require('../services/github.service');
var ProfileComponent = (function () {
    function ProfileComponent(_service, _fb) {
        var _this = this;
        this._service = _service;
        this._fb = _fb;
        this.myForm = _fb.group({
            searchuser: ['']
        });
        this._service.getUser().subscribe(function (data) {
            console.log(data);
            _this.user = data;
        }, function (error) { alert('Error while collecting user details!'); });
        this._service.getRepos().subscribe(function (data) {
            console.log(data);
            _this.repos = data;
        }, function (error) { alert('Error while collection repos details!'); });
    }
    ProfileComponent.prototype.searchUser = function () {
        var _this = this;
        console.log('Username to search in GitHub : ' + this.searchuser);
        this._service.setUsername(this.searchuser);
        this._service.getUser().subscribe(function (data) {
            console.log(data);
            _this.user = data;
        });
        this._service.getRepos().subscribe(function (data) {
            console.log(data);
            _this.repos = data;
        });
    };
    ProfileComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'profile',
            templateUrl: 'profile.component.html'
        }), 
        __metadata('design:paramtypes', [github_service_1.GithubService, forms_1.FormBuilder])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map