import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { FormControl, FormGroup } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonModule, SelectButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  formGroup!: FormGroup;
  sw: boolean = true;
  stateOptions: any[] = [
    { label: 'Off', value: 'off' },
    { label: 'On', value: 'on' },
  ];
  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.formGroup = new FormGroup({
      value: new FormControl('on'),
    });
  }
}
