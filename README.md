# dongkk.com portfolio

Portable React portfolio, migrated from Hostinger in October 2026.

## Run and publish

Requires Node.js 22.12+ or a compatible newer version.

    npm ci
    npm start
    npm run build
    npm run preview

Upload the contents of dist/ to Cloudflare Workers Static Assets. The project is static-only: no Worker script, database, paid subscription, or runtime API token is required. wrangler.jsonc also supports a future authorized CLI deployment with npm run deploy.

## Update content

- Edit src/content.json for projects, skills, work experience, testimonials, and brands.
- Images are stored in public/content/; use /content/filename.webp in the JSON.
- Contact details are in src/container/Footer/Footer.jsx.
- The CV is in src/assets/zhenhao_dong_CV.pdf.
- Rebuild and redeploy after making changes.

The current content is a snapshot of the published Sanity portfolio. Sanity changes no longer appear automatically. No contacts, messages, private drafts, or CMS credentials are included in the snapshot. The contact link opens the visitor's email app; it does not store messages in a database.

## Hosting and domain

Keep dongkk.com registered and renewed independently of hosting. Cloudflare DNS and static hosting use the free plan. Buying paid Workers, storage, AI APIs, or mailbox services is a separate decision. Website hosting does not include a full email mailbox.

Retain a local copy of this source and the latest working dist/. The build is portable to another static hosting provider if needed.

The DM Sans font is self-hosted under the license in public/fonts/OFL.txt.
