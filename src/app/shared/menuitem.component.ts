import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-menuitem',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>menuitem works!</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuitemComponent { }
