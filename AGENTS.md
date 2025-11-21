# Codebase Analysis

## Build/Lint/Test Commands
- `npm run build` - compile TypeScript files
- `npm run lint` - lint code using ESLint
- `npm run test` - run unit tests
- `npm run typecheck` - check types
- Single test command: `npm run test -- --testNamePattern="specific_test_name"`

## Code Style Guidelines
- Imports: use TypeScript imports (import { foo } from 'bar')
- Formatting: Prettier formatting, 2-space indentation
- Types: strict typing with interfaces and type aliases
- Naming conventions: camelCase for functions and variables
- Error handling: try/catch blocks around async operations

## Cursor Rules
- .cursor/rules/ directory exists with rules
- .github/copilot-instructions.md file present

## Codebase Structure
- src/ directory contains source code
- tests/ directory contains test files
- package.json for dependency management