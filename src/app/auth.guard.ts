import { Injectable } from "@angular/core";
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { Observable } from "rxjs";
@Injectable({
    providedIn:'root'
})

export class AuthGuard implements CanActivate{
    constructor(private router:Router){

    }
    token:any;

    canActivate() {
        this.token = localStorage.getItem('token');
        if(this.token){
            return true; 
        } else{
            this.router.navigate(['login']);
            return true;
        }
    }
}
