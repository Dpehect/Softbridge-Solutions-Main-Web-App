IMPORTANT: GitHub currently contains both middleware.ts and proxy.ts.
Next.js 16 refuses to build when both exist.

Before deployment, DELETE middleware.ts from the repository root.
Keep proxy.ts.

This archive does not contain middleware.ts.
For a clean replacement, delete the old repository files first, then upload all files from this folder.
After pushing, redeploy on Vercel without using the previous build cache.
