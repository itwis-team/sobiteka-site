import { Component, Input, OnInit } from '@angular/core';
import { HideMenuService } from 'src/app/servises/hiden-menu.service';

@Component({
  selector: 'app-hide-menu',
  templateUrl: './hide-menu.component.html',
  styleUrls: ['./hide-menu.component.scss'],
})
export class HideMenuComponent implements OnInit {
  constructor(private hideMenuService: HideMenuService) {}

  ngOnInit(): void {
    this.hideMenuService.isActive$.subscribe((value) => (this.value = value));
  }

  value: boolean;

  toggleShow() {
    this.hideMenuService.close();
  }
}

// export class HideMenuComponent {
//   @Input() menuIsActive: boolean;
//   @Input() toggleShowMenu: Function;
// }
