import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hide-menu',
  templateUrl: './hide-menu.component.html',
  styleUrls: ['./hide-menu.component.scss'],
})
export class HideMenuComponent {
  @Input() menuIsActive: boolean;
  @Input() toggleShowMenu: Function;
}
