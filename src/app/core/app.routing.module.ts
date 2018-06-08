import { NgModule } from "@angular/core";
import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserindexComponent } from '../userindex/userindex.component';
import { LoginComponent } from "../login/login.component";
import { PageNotFoundComponent } from "../page-not-found/page-not-found.component";


const routes: Routes = [
    {path:'',redirectTo:'/login',pathMatch:'full'},
    { path: 'user', component: UserindexComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', component: PageNotFoundComponent }
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
export const routingComponents = [LoginComponent, UserindexComponent, PageNotFoundComponent]