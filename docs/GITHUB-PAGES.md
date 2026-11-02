# GitHub Pages — Team Battle Ready site

Production target: [README § Production target](../README.md#production-target).

## One-time repo settings (Joe or Bridge)

Follow [GitHub: configure a publishing source for GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site):

1. Open **Settings → Pages** on [LTW-Log-IT/tbr-site](https://github.com/LTW-Log-IT/tbr-site).
2. Under **Build and deployment**, set **Source** to **GitHub Actions** (not “Deploy from a branch”).
3. After the first successful run of `.github/workflows/pages.yml` on `main`, set **Custom domain** to `tbr.leadthewaylogistics.info` and enable **Enforce HTTPS** when GitHub shows the DNS check as valid.

No repository secrets are required for this workflow.

## DNS (Bridge)

Point `tbr.leadthewaylogistics.info` at GitHub Pages per [GitHub: custom domain for Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site). The built site includes `dist/CNAME` from `public/CNAME`.

## Verify

- Actions tab: **pages** workflow green on `main`.
- Browser: `https://tbr.leadthewaylogistics.info` serves the home page (after DNS propagates).

Do not advertise the domain until Joe completes the content checklist in the README.
