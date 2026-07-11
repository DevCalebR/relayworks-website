# Deployment

This website is a static Next.js export suitable for Cloudflare Pages, Netlify, GitHub Pages, and Vercel Hobby.

## Build Settings

- Install command: `npm install`
- Build command: `npm run build`
- Output directory: `out`
- Node version: use the current LTS release supported by your host.

Static export is configured in `next.config.ts`:

```ts
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};
```

## Cloudflare Pages

1. Push this repository to GitHub.
2. In Cloudflare Pages, choose **Create a project**.
3. Connect the GitHub repository.
4. Use build command `npm run build`.
5. Use output directory `out`.
6. Deploy.

## Netlify

1. Push this repository to GitHub.
2. In Netlify, choose **Add new site**.
3. Import the GitHub repository.
4. Use build command `npm run build`.
5. Use publish directory `out`.
6. Deploy.

## GitHub Pages

1. Push this repository to GitHub.
2. Configure GitHub Actions to run `npm install` and `npm run build`.
3. Publish the generated `out` directory as the Pages artifact.
4. Use repository settings to enable Pages for the workflow output.

## Vercel Hobby

1. Push this repository to GitHub.
2. Import the repository in Vercel.
3. Vercel detects Next.js automatically.
4. Keep build command as `npm run build`.
5. Deploy.

## Replace The Gumroad URL

Update the shared constant in:

```text
config/site.ts
```

Change:

```ts
export const GUMROAD_URL = "https://calebroge5.gumroad.com/l/djzlrg";
```

All Buy Now and pricing links use this constant.

## Add A Custom Domain Later

1. Add the domain in your hosting provider.
2. Configure the DNS records requested by that provider.
3. Update `site.url` in `config/site.ts`.
4. Rebuild and redeploy so metadata, sitemap, and robots references use the final domain.
