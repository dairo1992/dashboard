import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from '../../services/shredServices/app.layout.service';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [MenuModule, ButtonModule],
  templateUrl: './topbar.component.html',
  styles: ``,
})
export class TopbarComponent implements OnInit {
  items!: MenuItem[];
  itemsTopbar: MenuItem[] | undefined;
  @ViewChild('menubutton') menuButton!: ElementRef;

  @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

  @ViewChild('topbarmenu') menu!: ElementRef;

  constructor(public layoutService: LayoutService) {}
  ngOnInit() {
    this.itemsTopbar = [
      {
        label: 'Optiones',
        items: [
          {
            label: 'Perfil',
            icon: 'pi pi-user',
            command: () => {
              this.update();
            },
          },
          {
            label: 'Logout',
            icon: 'pi pi-power-off',
            command: () => {
              this.delete();
            },
          },
        ],
      },
    ];
  }

  update() {}

  delete() {}
}
