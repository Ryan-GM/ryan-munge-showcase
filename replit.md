# Portfolio Application

## Overview

This is a full-stack portfolio application built with React, TypeScript, and Express.js. It features a modern, responsive design using Tailwind CSS and shadcn/ui components. The application is designed to showcase a developer's work, skills, and experience through a clean, professional interface.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui component library for consistent design
- **State Management**: TanStack Query for server state management
- **Routing**: React Router for client-side navigation

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: connect-pg-simple for PostgreSQL session storage
- **Development**: Hot reloading with Vite middleware integration

### Build System
- **Development**: Vite dev server with Express backend
- **Production**: Vite build for frontend, esbuild for backend bundling
- **TypeScript**: Strict type checking across the entire application

## Key Components

### Frontend Components
- **Navigation**: Fixed navigation with smooth scrolling and active section highlighting
- **Hero Section**: Landing area with animated typography and call-to-action
- **About Section**: Personal information and developer introduction
- **Projects Section**: Portfolio showcase with project cards and external links
- **Skills Section**: Technical skills with progress indicators
- **Contact Section**: Contact form with toast notifications
- **Footer**: Social links and copyright information

### Backend Components
- **Storage Interface**: Abstracted storage layer with in-memory implementation
- **User Management**: Basic user schema with authentication preparation
- **Route Registration**: Modular route setup for API endpoints
- **Middleware**: Request logging and error handling

### Database Schema
- **Users Table**: Basic user structure with id, username, and password fields
- **Validation**: Zod schema validation for type safety

## Data Flow

### Client-Side Flow
1. React components render the portfolio sections
2. TanStack Query manages any server state (currently minimal)
3. Form submissions trigger toast notifications
4. Smooth scrolling navigation between sections
5. Responsive design adapts to different screen sizes

### Server-Side Flow
1. Express server handles API requests (currently minimal)
2. Storage interface provides CRUD operations
3. Drizzle ORM manages database interactions
4. Session management ready for authentication features

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React, React DOM, React Router
- **UI Framework**: Radix UI primitives, shadcn/ui components
- **Styling**: Tailwind CSS, class-variance-authority, clsx
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React icons
- **State Management**: TanStack Query
- **Utilities**: date-fns, nanoid

### Backend Dependencies
- **Server**: Express.js with TypeScript support
- **Database**: Drizzle ORM, Neon Database client
- **Session**: connect-pg-simple for PostgreSQL sessions
- **Development**: tsx for TypeScript execution

### Development Tools
- **Build**: Vite, esbuild
- **Linting**: TypeScript strict mode
- **Replit Integration**: Cartographer plugin, runtime error overlay

## Deployment Strategy

### Development
- **Server**: Express with Vite middleware for hot reloading
- **Database**: Neon Database with environment-based configuration
- **Assets**: Vite handles static asset serving and hot module replacement

### Production
- **Frontend**: Vite builds optimized static assets
- **Backend**: esbuild bundles Express server for Node.js execution
- **Database**: Production PostgreSQL connection via DATABASE_URL
- **Deployment**: Single command deployment with build and start scripts

### Database Management
- **Migrations**: Drizzle Kit for schema migrations
- **Development**: `db:push` command for schema synchronization
- **Configuration**: Environment-based database URL configuration

## User Preferences

Preferred communication style: Simple, everyday language.

## Changelog

Changelog:
- July 08, 2025. Initial setup