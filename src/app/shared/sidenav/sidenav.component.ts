import { Component, OnInit } from '@angular/core';
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
  ngOnInit() {
    routes.forEach((item) => {
      if (item.title) {
        const newItem: any = {
          label: item.title,
          expanded: true,
          icon:
            item.title == 'USUARIOS' ? 'pi pi-fw pi-user' : 'pi pi-fw pi-users',
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
}
