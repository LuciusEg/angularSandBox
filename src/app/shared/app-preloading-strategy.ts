import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of } from "rxjs";
import { delay, tap } from "rxjs/operators";

export class AppPreloadingStrategy implements PreloadingStrategy {
    preload(route: Route, load: () => Observable<boolean>): Observable<boolean>{
        // return of(null);
        // return load();
        
        if ( route.data && route.data['noPreload'] ){
            return of(true);
        }
        
        return of(true).pipe(delay(2000), tap(() => load()));
    }
}