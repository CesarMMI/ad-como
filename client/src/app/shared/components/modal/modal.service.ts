import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class ModalService {
    constructor() {}

    private show$ = new BehaviorSubject<boolean>(false);
    public getShow(): Observable<boolean> {
        return this.show$.asObservable();
    }
    public setShow(show: boolean): void {
        this.show$.next(show);
    }
    public toggleShow(): void {
        this.show$.next(!this.show$.value);
    }
}
