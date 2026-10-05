import { defineConfig } from 'astro/config';

const [owner, repository] = process.env.GITHUB_REPOSITORY?.split('/') ?? [];
const isUserOrOrgSite = owner && repository === `${owner}.github.io`;

export default defineConfig({
  site: owner ? `https://${owner}.github.io` : undefined,
  base: owner && !isUserOrOrgSite ? `/${repository}` : '/',
  trailingSlash: 'always',
});
