import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { HeaderActions } from '../header-actions/header-actions';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [MatToolbar, HeaderActions, RouterLink],
  template: `
    <mat-toolbar class="w-full elevated py-2">
      <div class="max-w-[1200px] mx-auto w-full flex justify-between items-center">
        <span routerLink="/" class="cursor-pointer">Modern Store</span>
        <app-header-actions></app-header-actions>
      </div>
    </mat-toolbar>
  `,
  standalone: true,
})
export class Header {}
