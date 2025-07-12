# apicurio-registry-native-esm-issue

## Relevant TypeScript compiler options

- `"module": "node18`: This treats any projects and dependencies with `"type": "module"` as native ESM.

## Steps to Reproduce

1. Clone the repository
   ```bash
   git clone https://github.com/hoishin/apicurio-registry-native-esm-issue.git
   cd apicurio-registry-native-esm-issue
   ```
1. Install dependencies
   ```bash
   npm install
   ```
1. Run the TypeScript compiler
   ```bash
   npx tsc
   # Results in import error in `src/main.ts`, no error in `src/fixed.ts`
   ```
