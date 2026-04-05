# AI Coding Guidelines for React Hooks Course Project

## Project Overview
This is a React TypeScript project demonstrating various React hooks, built with Vite, Tailwind CSS, and shadcn/ui components. Examples are organized in numbered folders (e.g., `01-useState/`, `02-useEffect/`) with practical implementations.

## Architecture
- **Main App**: `src/HooksApp.tsx` - Simple entry point
- **Hook Examples**: Numbered folders in `src/` contain individual hook demonstrations
- **Custom Hooks**: `src/hooks/` - Reusable hooks like `useCounter.tsx`
- **UI Components**: `src/components/ui/` - shadcn/ui-style components using `class-variance-authority`
- **Reducers**: `src/05-useReducer/reducer/` - Reducer functions with Zod validation
- **Utilities**: `src/lib/utils.ts` - `cn()` function for Tailwind class merging

## Key Patterns
- **Custom Hooks**: Place in `src/hooks/`, export as named export (e.g., `export const useCounter = ...`)
- **UI Components**: Use `cva` for variants, `cn()` for class merging, Radix UI primitives
- **Reducers**: Include Zod schemas for type safety, persist state to localStorage when needed
- **Optimistic Updates**: Use `useOptimistic` with `useTransition` for pending states (see `src/07-useOptimistic/InstagramApp.tsx`)
- **State Management**: Prefer useState for simple state, useReducer for complex state with validation

## Development Workflow
- **Start Dev Server**: `npm run dev` (Vite with HMR)
- **Build**: `npm run build` (TypeScript compilation + Vite build)
- **Lint**: `npm run lint` (ESLint with React rules)
- **Preview**: `npm run preview` (Serve built app)

## Conventions
- **Imports**: Use `@/` alias for `src/` (configured in `vite.config.ts`)
- **Styling**: Tailwind CSS with custom gradients and animations
- **TypeScript**: Strict typing, use Zod for runtime validation in reducers
- **File Naming**: PascalCase for components, camelCase for hooks/utilities
- **Folder Structure**: Numbered folders for course progression, logical grouping for shared code

## Examples
- Traffic light with useState: `src/01-useState/TrafficLight.tsx`
- Counter hook: `src/hooks/useCounter.tsx`
- Tasks reducer with localStorage: `src/05-useReducer/reducer/tasksReducer.ts`
- Button component with variants: `src/components/ui/button.tsx`</content>
<parameter name="filePath">c:\Users\DETPC\Documents\React course\Hooks\.github\copilot-instructions.md