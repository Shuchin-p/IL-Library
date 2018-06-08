import { NgModule } from "@angular/core";
import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserindexComponent } from '../userindex/userindex.component';
import { LoginComponent } from "../login/login.component";


const routes: Routes = [
    { path: 'user', component: UserindexComponent },
    { path: 'login', component: LoginComponent },
    { path: '', component: LoginComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})

export class AppRoutingModule { }
