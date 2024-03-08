import {
  Component,
  ElementRef,
  HostBinding,
  Input,
  OnInit,
  Type,
} from '@angular/core';
import { LayoutService } from '../../services/shredServices/app.layout.service';
import { MenuModule } from 'primeng/menu';
import { routes } from '../../app.routes';
import { Resolve, ResolveFn } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [MenuModule],
  providers: [],
  templateUrl: './sidenav.component.html',
  styles: ``,
})
export class SidenavComponent implements OnInit {
  model: any[] = [
    {
      label: 'HOME',
      items: [
        {
          label: 'Dashboard',
          icon: 'pi pi-fw pi-home',
          routerLink: [''],
        },
      ],
    },
  ];
  @Input() @HostBinding('class.layout-root-menuitem') root!: boolean;
  active = false;
  public menuItems: any;
  constructor(public layoutService: LayoutService, public el: ElementRef) {}
  ngOnInit() {
    routes.forEach((item) => {
      if (item.title) {
        const newItem: any = {
          label: item.title,
          items: [],
        };
        if (item.children) {
          item.children.forEach((child) => {
            const childItem = {
              label: child.title,
              routerLink: child.path,
              icon: child.outlet ?? '',
            };
            newItem.items.push(childItem);
          });
        }
        this.model.push(newItem);
      }
    });
  }

  get submenuAnimation() {
    console.log(this.root);
    return this.root ? 'expanded' : this.active ? 'expanded' : 'collapsed';
  }
}
