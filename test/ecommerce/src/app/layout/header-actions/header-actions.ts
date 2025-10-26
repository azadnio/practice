import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatButton, MatIconButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-actions',
  imports: [MatIcon, MatButton, MatIconButton, RouterLink],
  template: `
    <div class="flex items-center gap-2">
      <button matIconButton aria-label="Favorite" routerLink="/wishlist">
        <mat-icon>favorite</mat-icon>
      </button>
      <button matIconButton aria-label="Shopping Cart" routerLink="/cart">
        <mat-icon>shopping_cart</mat-icon>
      </button>
      <button matButton="">Sign In</button>
      <button matButton="filled">Sign Up</button>
    </div>
  `,
  standalone: true,
})
export class HeaderActions {}
