import { Component, ElementRef, OnInit } from '@angular/core';
import { LayoutService } from '../../services/shredServices/app.layout.service';
import { MenuModule } from 'primeng/menu';
import { routes } from '../../app.routes';
import { PanelMenuModule } from 'primeng/panelmenu';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [MenuModule, PanelMenuModule],
  providers: [],
  templateUrl: './sidenav.component.html',
  styles: ``,
})
export class SidenavComponent implements OnInit {
  model: any[] = [
    {
      label: 'HOME',
      expanded: true,
      icon: 'pi pi-fw pi-home',
      items: [
        {
          label: 'Dashboard',
          routerLink: [''],
        },
      ],
    },
  ];

  active = false;
  public menuItems: any;
  constructor(public layoutService: LayoutService, public el: ElementRef) {}
  ngOnInit() {
    routes.forEach((item) => {
      if (item.title) {
        const newItem: any = {
          label: item.title,
          expanded: true,
          icon: item.title == 'USUARIOS' ? 'pi pi-fw pi-user' : 'pi pi-fw pi-users',
          separator: true,
          items: [],
        };
        if (item.children) {
          item.children.forEach((child) => {
            const childItem = {
              label: child.title,
              routerLink: child.path,
            };
            newItem.items.push(childItem);
          });
        }
        this.model.push(newItem);
      }
    });
  }

  // get submenuAnimation() {
  //   console.log(this.root);
  //   return this.root ? 'expanded' : this.active ? 'expanded' : 'collapsed';
  // }
}
