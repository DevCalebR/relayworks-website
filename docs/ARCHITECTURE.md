# Architecture

RelayWorks is a static marketing and portfolio application built with the Next.js App Router.

## Boundaries

- `app/` owns route content, metadata, and presentation.
- `components/` contains shared navigation and product-media primitives.
- `config/site.ts` is the single source for canonical site metadata and the external product-purchase URL.
- `public/` contains versioned media shipped with the static export.

## Runtime model

`next.config.ts` enables `output: "export"`. The build renders every route to `out/`; the hosting provider only serves files. The external purchase provider and GitHub contact profile are navigational dependencies, not server-side integrations.

## Trust boundaries

The site does not accept user input or store customer data. Microsoft Clarity is loaded in the root layout, and the external purchase provider handles its own checkout. Changes to either integration should be reflected in the privacy policy.
