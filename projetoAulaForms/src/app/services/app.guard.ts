import { Injectable } from "@angular/core";
import { CanLoad, Route, UrlSegment } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class AuthGuard implements CanLoad {

    user = { admin: true, logged: false }

    canLoad() : boolean {
        return this.user.admin;
    }

}