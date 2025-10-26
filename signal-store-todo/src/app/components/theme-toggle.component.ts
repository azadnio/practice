import { Component, inject } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  template: `
    <button 
      mat-icon-button 
      (click)="toggleTheme()"
      [matTooltip]="isDarkTheme() ? 'Switch to light mode' : 'Switch to dark mode'"
      class="theme-toggle-btn">
      <mat-icon>{{ isDarkTheme() ? 'light_mode' : 'dark_mode' }}</mat-icon>
    </button>
  `,
  styles: [`
    .theme-toggle-btn {
      transition: transform 0.2s ease;
    }
    
    .theme-toggle-btn:hover {
      transform: scale(1.1);
    }
  `],
  imports: [MatIconButton, MatIcon, MatTooltip]
})
export class ThemeToggleComponent {
  private themeService = inject(ThemeService);
  
  isDarkTheme = this.themeService.isDarkTheme;
  
  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}