# CLAUDE.md - Galexora Project Guide

## Project Overview

Galexora is a Galaxy Explorer web application that allows users to browse and search information about planets and celestial bodies in our solar system. It also integrates with NASA's Astronomy Picture of the Day (APOD) API.

## Tech Stack

- **Framework**: Next.js 15.5 with Turbopack
- **React**: 19.1.0
- **Styling**: Tailwind CSS 4 with CSS variables
- **UI Components**: shadcn/ui (New York style)
- **Icons**: Lucide React, React Icons
- **Language**: JavaScript (JSX) - no TypeScript

## Directory Structure

```
galexora/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.js           # Root layout with fonts
│   │   ├── page.js             # Main Galaxy Explorer page
│   │   ├── globals.css         # Global styles and CSS variables
│   │   └── favicon.ico
│   ├── components/
│   │   └── ui/                 # shadcn/ui components
│   │       ├── button.jsx
│   │       ├── card.jsx
│   │       └── input.jsx
│   └── lib/
│       └── utils.js            # Utility functions (cn helper)
├── icons/                      # App icons
├── package.json
├── components.json             # shadcn/ui configuration
├── jsconfig.json               # Path aliases
├── eslint.config.mjs           # ESLint flat config
├── next.config.mjs             # Next.js configuration
└── postcss.config.mjs          # PostCSS with Tailwind plugin
```

## Development Commands

```bash
# Start development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## Code Conventions

### File Naming
- React components: `PascalCase` (e.g., `GalaxyPage`)
- Files: `lowercase` with hyphens for UI components (e.g., `button.jsx`)
- Use `.jsx` extension for React components (not `.tsx` - project uses JavaScript)

### Import Aliases
- Use `@/` prefix for imports from `src/` directory
- Example: `import { Button } from "@/components/ui/button"`

### Component Patterns
- Use `"use client"` directive for client-side components with hooks
- shadcn/ui components use `data-slot` attributes for styling hooks
- Components accept `className` prop and merge with `cn()` utility

### Styling
- Use Tailwind CSS utility classes
- CSS variables defined in `globals.css` under `:root` and `.dark` selectors
- Use `cn()` from `@/lib/utils` to merge class names
- Color system uses oklch color space for design tokens

### State Management
- React hooks (`useState`, `useEffect`) for local state
- No external state management library currently in use

## UI Components (shadcn/ui)

Components are configured in `components.json`:
- Style: `new-york`
- Base color: `neutral`
- CSS variables: enabled
- Icon library: `lucide`

Available components in `src/components/ui/`:
- `Button` - with variants: default, destructive, outline, secondary, ghost, link
- `Card` - with CardHeader, CardTitle, CardContent, CardFooter, CardDescription, CardAction
- `Input` - styled text input

### Adding New shadcn/ui Components
```bash
npx shadcn@latest add [component-name]
```

## Environment Variables

Required environment variable:
- `NEXT_PUBLIC_NASA_KEY` - NASA API key for APOD endpoint

Create a `.env.local` file:
```
NEXT_PUBLIC_NASA_KEY=your_nasa_api_key
```

## API Integration

The app fetches NASA's Astronomy Picture of the Day:
- Endpoint: `https://api.nasa.gov/planetary/apod`
- Requires API key via query parameter
- Includes fallback UI when API is unavailable

## Fonts

Three Google Fonts are loaded:
- Geist Sans (default sans-serif)
- Geist Mono (monospace)
- Inter (additional sans-serif)

## Key Files Reference

| File | Purpose |
|------|---------|
| `src/app/page.js` | Main page component with planet data and search |
| `src/app/layout.js` | Root layout with metadata and fonts |
| `src/app/globals.css` | CSS variables, theme tokens, Tailwind config |
| `src/lib/utils.js` | `cn()` utility for className merging |
| `components.json` | shadcn/ui component configuration |

## ESLint Configuration

Uses flat config format with:
- `next/core-web-vitals` preset
- Ignores: `node_modules/`, `.next/`, `out/`, `build/`, `next-env.d.ts`

## Best Practices for AI Assistants

1. **Preserve existing patterns**: Follow the established JSX/JavaScript conventions (not TypeScript)
2. **Use path aliases**: Always use `@/` imports for src directory files
3. **Component styling**: Use Tailwind classes with `cn()` for conditional styles
4. **Client components**: Add `"use client"` when using React hooks
5. **shadcn/ui**: Use existing components from `src/components/ui/` when possible
6. **Environment variables**: Never commit API keys; use `NEXT_PUBLIC_` prefix for client-side vars
7. **Responsive design**: Use Tailwind responsive prefixes (sm:, md:, lg:)
8. **Dark mode**: Use CSS variables that support `.dark` class variants
