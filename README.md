# RelayWorks Website

Static marketing website for RelayWorks and RelayWorks AI Document Processing Kit.

## Tech Stack

- Next.js
- TypeScript
- Static export
- No API routes
- No backend
- No database
- No authentication

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Open the local URL printed by Next.js.

## Typecheck

```bash
npm run typecheck
```

## Build

```bash
npm run build
```

The site is configured with `output: "export"` in `next.config.ts`. The static export is generated in:

```text
out/
```

## Project Structure

```text
app/
  document-processing-kit/
  privacy/
  terms/
  globals.css
  layout.tsx
  page.tsx
components/
config/
public/
  images/product/
  video/
```

## Purchase URL

All purchase buttons use the shared constant in:

```text
config/site.ts
```

Update `GUMROAD_URL` there to change every Buy Now link.

## Screenshots

Product screenshots live in:

```text
public/images/product/
```

They were copied from the approved RelayWorks AI Document Processing Kit screenshot set.
