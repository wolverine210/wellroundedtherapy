# Well Rounded LLC — Website

Christian counseling website for Well Rounded LLC, built for GitHub Pages hosting.

## File Structure

```
wellrounded/
├── index.html          ← Main website file
├── README.md           ← This file
└── assets/
    ├── style.css       ← All styles
    ├── main.js         ← Navigation & form interactions
    ├── hero.svg        ← Hero section illustration
    └── headshot.jpg    ← Counselor photo (About section)
```

## Deploying to GitHub Pages

1. Create a new GitHub repository (e.g. `wellroundedllc`)
2. Upload **all files**, keeping the `assets/` folder intact
3. Go to **Settings → Pages**
4. Under **Source**, select `Deploy from a branch` → `main` → `/ (root)`
5. Click **Save** — your site will be live at `https://yourusername.github.io/wellroundedllc`

## Pointing a Custom Domain

1. In **Settings → Pages → Custom domain**, enter your domain (e.g. `wellroundedllc.com`)
2. With your domain registrar, add these DNS records:
   - **A records** pointing to GitHub's IPs:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - Or a **CNAME** record: `www` → `yourusername.github.io`

## Updating Contact Info

All contact details are in `index.html`. Search for:
- `erika@wellroundedllc.com` — email address
- `(505) 810-4357` — phone number

## License

© 2025 Well Rounded LLC. All rights reserved.
