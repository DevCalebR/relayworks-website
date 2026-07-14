# Troubleshooting

## The build does not create `out/`

Run `npm ci` followed by `npm run build`. Confirm the active Node.js version is 20 or 22 and that `next.config.ts` still sets `output: "export"`.

## A product link points to the wrong checkout

Update the single `GUMROAD_URL` value in `config/site.ts`, rebuild, and inspect both header and product-page actions.

## A route works locally but fails after deployment

The site uses trailing slashes. Confirm the hosting provider serves directory indexes and uses `out/` as the published directory.

## Metadata uses the wrong domain

Update `site.url` in `config/site.ts`, rebuild, and inspect the generated canonical and social metadata.
