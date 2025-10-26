# 📝 Angular Signal Store Todo App

A modern, feature-rich Todo application built with **Angular 20** and **NgRx Signals**. This project demonstrates best practices for Angular development using the latest features including standalone components, signals, and Material Design.

## ✨ Features

### Core Functionality
- ✅ **Add Todos**: Create new todo items with Enter key
- ✅ **Mark Complete**: Toggle completion status with checkboxes
- ✅ **Delete Todos**: Remove unwanted items with delete button
- ✅ **Filter Views**: Switch between All, Pending, and Completed todos
- ✅ **Persistent Storage**: Automatic mock data loading with async operations

### UI/UX Features
- 🎨 **Material Design**: Clean, modern interface with Angular Material
- 🌙 **Dark/Light Theme**: Toggle between themes with persistent preference
- 📱 **Responsive Design**: Works seamlessly on all device sizes
- ⚡ **Loading States**: Visual feedback during async operations
- 🎯 **Accessibility**: ARIA labels and keyboard navigation support

### Technical Highlights
- 🔧 **Angular Signals**: Reactive state management with NgRx Signals
- 🏗️ **Standalone Components**: Modern Angular architecture
- 🎭 **Change Detection**: OnPush strategy for optimal performance
- 🧪 **Type Safety**: Full TypeScript implementation
- 🎨 **SCSS Styling**: Modern CSS with theme support

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- Angular CLI 20+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/azadnio/to-do-ngrxsignal.git
   cd signal-store-todo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   ng serve
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200/`

## 🏗️ Architecture

### Project Structure
```
src/
├── app/
│   ├── components/           # Reusable UI components
│   │   └── theme-toggle.component.ts
│   ├── services/            # Business logic services
│   │   └── theme.service.ts
│   ├── to-do/              # Todo feature module
│   │   ├── service/        # Todo data services
│   │   ├── store/          # NgRx Signal store
│   │   ├── to-do.component.*
│   │   └── ...
│   ├── app.config.ts       # Application configuration
│   └── ...
```

### State Management
- **NgRx Signals**: Modern reactive state management
- **Signal Store**: Centralized todo state with computed properties
- **Effects**: Async operations with loading states
- **Computed Values**: Filtered todo lists based on current filter

### Theme System
- **Theme Service**: Signal-based theme management
- **CSS Variables**: Dynamic theme switching
- **Local Storage**: Persistent theme preferences
- **System Integration**: Respects OS dark mode preference

## 🛠️ Technology Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **Angular** | Frontend Framework | 20.x |
| **NgRx Signals** | State Management | 20.x |
| **Angular Material** | UI Components | 20.x |
| **TypeScript** | Type Safety | 5.9.x |
| **SCSS** | Styling | Latest |

## 📱 Usage

### Adding Todos
1. Type your todo item in the input field
2. Press **Enter** to add the item
3. The input will clear automatically

### Managing Todos
- **Complete**: Click the checkbox to mark as done
- **Delete**: Click the delete icon to remove
- **Filter**: Use toggle buttons to view All/Pending/Completed

### Theme Switching
- Click the **sun/moon icon** in the top-right corner
- Your preference is automatically saved
- Respects your system's dark mode setting

## 🎨 Customization

### Adding New Themes
1. Define new color palette in `src/styles.scss`
2. Create theme-specific CSS variables
3. Update theme service to handle new theme

### Extending Functionality
- **Categories**: Add todo categories or tags
- **Due Dates**: Implement deadline functionality  
- **Priorities**: Add priority levels
- **Search**: Implement todo search/filtering

## 🧪 Development

### Available Scripts

```bash
# Development server
npm start

# Build for production
npm run build

# Run unit tests
npm test

# Run tests in watch mode
npm run test:watch

# Lint code
npm run lint
```

### Code Quality
- **ESLint**: Code linting and formatting
- **Prettier**: Consistent code formatting  
- **TypeScript**: Strict type checking
- **Angular CLI**: Development tools and scaffolding

## 🏆 Best Practices Demonstrated

### Angular Patterns
- ✅ Standalone components over NgModules
- ✅ Signal-based reactive programming
- ✅ OnPush change detection strategy
- ✅ Dependency injection with `inject()`
- ✅ Template-driven reactive patterns

### Performance Optimizations
- ✅ Lazy loading with route-based code splitting
- ✅ OnPush change detection
- ✅ TrackBy functions for list rendering
- ✅ Minimal re-renders with signals

### Accessibility
- ✅ ARIA labels and roles
- ✅ Keyboard navigation support
- ✅ Screen reader compatibility
- ✅ Semantic HTML structure

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Resources

- [Angular Documentation](https://angular.dev)
- [NgRx Signals Guide](https://ngrx.io/guide/signals)
- [Angular Material](https://material.angular.io)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
