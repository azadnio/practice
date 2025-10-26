import { Injectable, signal, effect, inject, DOCUMENT } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly storageKey = 'app-theme';
  private document: Document = inject(DOCUMENT);
  private get window(): Window {
    return this.document.defaultView || (globalThis as any);
  }
  
  // Signal to track current theme - initialize with default value
  isDarkTheme = signal<boolean>(false);

  constructor() {
    // Initialize theme from storage after construction
    this.initializeTheme();
    
    // Effect to apply theme changes and persist to localStorage
    effect(() => {
      const isDark = this.isDarkTheme();
      this.applyTheme(isDark);
      
      // Safe localStorage access
      try {
        if (typeof window !== 'undefined' && this.window.localStorage) {
          this.window.localStorage.setItem(this.storageKey, JSON.stringify(isDark));
        }
      } catch (error) {
        console.warn('Failed to save theme preference:', error);
      }
    });
  }

  private initializeTheme(): void {
    const storedTheme = this.getStoredTheme();
    this.isDarkTheme.set(storedTheme);
  }

  toggleTheme(): void {
    this.isDarkTheme.update(isDark => !isDark);
  }

  private getStoredTheme(): boolean {
    try {
      // Safe check for browser environment
      if (typeof window === 'undefined' || !this.window.localStorage) {
        return false; // Default to light theme on server or when localStorage is unavailable
      }
      
      const stored = this.window.localStorage.getItem(this.storageKey);
      if (stored !== null) {
        return JSON.parse(stored);
      }
      
      // Check system preference
      if (this.window.matchMedia) {
        return this.window.matchMedia('(prefers-color-scheme: dark)').matches;
      }
      
      return false;
    } catch (error) {
      // Fallback to light theme if any error occurs
      console.warn('Failed to get stored theme:', error);
      return false;
    }
  }

  private applyTheme(isDark: boolean): void {
    const body = this.document.body;
    if (isDark) {
      body.classList.add('dark-theme');
      body.classList.remove('light-theme');
    } else {
      body.classList.add('light-theme');
      body.classList.remove('dark-theme');
    }
  }
}