# How to Consume WisteriaUI

WisteriaUI is a React component library (`wisteria-ui`) with exported components and bundled styles.

## 1) Install

```bash
npm install wisteria-ui react react-dom
```

> Peer dependencies from the package: `react` and `react-dom` (>= 19.2.6).

## 2) Import components

Components are exported from the package root:

```tsx
import { Button, Breadcrumb } from "wisteria-ui";

export function Example() {
  return (
    <>
      <Button>Click me</Button>
      <Breadcrumb items={[{ label: "Home", href: "/" }]} />
    </>
  );
}
```

---

## Storybook / local development (repo)

If you are developing WisteriaUI itself in this repo:

```bash
pnpm install
pnpm storybook
```

- Storybook config: `.storybook/main.ts`
- Story styles loaded from: `src/styles/index.css`

Build outputs:

```bash
pnpm build
```

This generates distributable files in `dist/` (`index.js`, `index.esm.js`, typings).
