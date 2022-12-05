import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HideMenuService {
  public isActive$ = new BehaviorSubject<boolean>(false);

  open() {
    this.isActive$.next(true);
  }

  close() {
    this.isActive$.next(false);
  }
}
