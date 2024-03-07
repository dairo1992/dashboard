import {
  Component,
  ElementRef,
  HostBinding,
  Input,
  OnInit,
} from '@angular/core';
import { LayoutService } from '../../services/app.layout.service';
import { MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';
import { MenuItem, MessageService } from 'primeng/api';
import { PanelMenuModule } from 'primeng/panelmenu';
import { TieredMenuModule } from 'primeng/tieredmenu';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [MenuModule, ToastModule, PanelMenuModule, TieredMenuModule],
  providers: [MessageService],
  templateUrl: './sidenav.component.html',
  styles: ``,
})
export class SidenavComponent implements OnInit {
  model: any[] = [];
  @Input() @HostBinding('class.layout-root-menuitem') root!: boolean;
  active = false;
  constructor(public layoutService: LayoutService, public el: ElementRef) {}
  ngOnInit() {
    this.model = [
      {
        label: 'Home',
        items: [
          {
            label: 'Dashboard',
            icon: 'pi pi-fw pi-home',
            routerLink: ['/home'],
          },
        ],
      },
      {
        label: 'UI Components',
        items: [
          {
            label: 'Form Layout',
            icon: 'pi pi-fw pi-id-card',
            routerLink: ['/uikit/formlayout'],
          },
          {
            label: 'Input',
            icon: 'pi pi-fw pi-check-square',
            routerLink: ['/uikit/input'],
          },
          {
            label: 'Float Label',
            icon: 'pi pi-fw pi-bookmark',
            routerLink: ['/uikit/floatlabel'],
          },
          {
            label: 'Invalid State',
            icon: 'pi pi-fw pi-exclamation-circle',
            routerLink: ['/uikit/invalidstate'],
          },
          {
            label: 'Button',
            icon: 'pi pi-fw pi-box',
            routerLink: ['/uikit/button'],
          },
        ],
      },
      {
        label: 'Auth',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'Login',
            icon: 'pi pi-fw pi-sign-in',
            routerLink: ['/auth/login'],
          },
          {
            label: 'Error',
            icon: 'pi pi-fw pi-times-circle',
            routerLink: ['/auth/error'],
          },
        ],
      },
    ];
  }

  get submenuAnimation() {
    return this.root ? 'expanded' : this.active ? 'expanded' : 'collapsed';
  }
}
