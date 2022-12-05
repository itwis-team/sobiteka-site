import { Component, OnInit } from '@angular/core';
import { HideMenuService } from 'src/app/servises/hiden-menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private hideMenuService: HideMenuService) {}

  ngOnInit(): void {
    this.hideMenuService.isActive$.subscribe((value) => (this.value = value));
  }
  value: boolean;

  toggleShow() {
    this.hideMenuService.open();
  }
}
