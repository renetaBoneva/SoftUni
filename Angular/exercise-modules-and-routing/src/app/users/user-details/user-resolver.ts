import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from 'rxjs';

import { User } from "../types/User";
import { UsersService } from "../users.service";
import { GlobalLoaderService } from "src/app/core/global-loading/global-loader.service";

@Injectable({ providedIn: 'root' })

export class UserResolver implements Resolve<User>{
    constructor(private userService: UsersService,
       private globalLoadingService: GlobalLoaderService) { }
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    // ) {
        ): User | Observable<User> | Promise<User> {
            this.globalLoadingService.showLoader();
            return this.userService.getSingleUsers(route.params['id']);
    }
}