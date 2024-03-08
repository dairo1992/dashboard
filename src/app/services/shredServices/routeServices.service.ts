import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RouteServicesService {
  model: any[] = [];
  constructor() {
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
            routerLink: ['/'],
          },
          {
            label: 'Input',
            icon: 'pi pi-fw pi-check-square',
            routerLink: ['/'],
          },
          {
            label: 'Float Label',
            icon: 'pi pi-fw pi-bookmark',
            routerLink: ['/'],
          },
          {
            label: 'Invalid State',
            icon: 'pi pi-fw pi-exclamation-circle',
            routerLink: ['/'],
          },
          {
            label: 'Button',
            icon: 'pi pi-fw pi-box',
            routerLink: ['/'],
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
            routerLink: ['/'],
          },
          {
            label: 'Error',
            icon: 'pi pi-fw pi-times-circle',
            routerLink: ['/'],
          },
        ],
      },
    ];
  }
}
