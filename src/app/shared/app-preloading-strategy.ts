import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of } from "rxjs";
import { delay, tap } from "rxjs/operators";

export class AppPreloadingStrategy implements PreloadingStrategy {
    preload(route: Route, load: () => Observable<boolean>): Observable<boolean>{
        // return of(null);
        // return load();
        return of(true).pipe(delay(3000), tap(() => load()));
    }
}