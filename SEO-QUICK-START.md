# SEO Quick Start Checklist

## Pre-Deployment (Before Going Live)

### 1. Configuration Updates

- [ ] Update `src/lib/seo.ts`:
  - Change `SITE_URL` from "https://jayukhiladi.com" to your actual domain
  - Update `SITE_NAME` if different
  - Update `SITE_DESCRIPTION` if different

- [ ] Create `.env.local`:

  ```
  NEXT_PUBLIC_SITE_URL=https://your-domain.com
  NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
  NEXT_PUBLIC_GOOGLE_VERIFICATION=your-verification-code
  ```

- [ ] Update `src/app/layout.tsx`:
  - Replace "GA_ID" (line 89 and 99) with your Google Analytics ID
  - Replace "your-google-verification-code" (line 94) with your actual verification code

- [ ] Update `public/robots.txt`:
  - Replace "https://jayukhiladi.com/sitemap.xml" with your actual domain

### 2. Google Setup

- [ ] Create Google Analytics 4 property
- [ ] Get verification code from Google Search Console
- [ ] Create Google My Business listing (if local)

### 3. Bing Setup

- [ ] Create Bing Webmaster Tools account
- [ ] Get verification code

### 4. Testing

- [ ] Test sitemap: `https://your-domain.com/sitemap.xml`
- [ ] Test robots.txt: `https://your-domain.com/robots.txt`
- [ ] Run Google Rich Results Test (https://search.google.com/test/rich-results)
- [ ] Run Google PageSpeed Insights
- [ ] Test mobile-friendly: https://search.google.com/test/mobile-friendly

## Post-Deployment (After Going Live)

### Week 1

- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Verify ownership in Google Search Console
- [ ] Verify ownership in Bing Webmaster Tools
- [ ] Check crawl errors in Google Search Console

### Week 2-4

- [ ] Monitor Google Analytics traffic
- [ ] Monitor Search Console for impressions
- [ ] Check for crawl errors
- [ ] Verify all pages are indexed
- [ ] Monitor rankings for target keywords

### Ongoing

- [ ] Monitor Core Web Vitals in PageSpeed Insights
- [ ] Monitor rankings monthly
- [ ] Add new products/content regularly
- [ ] Fix 404 errors as they appear
- [ ] Monitor user behavior in Analytics

## Verification Commands

### Test Sitemap Generation

```bash
# Local development
curl http://localhost:3000/sitemap.xml

# Production
curl https://your-domain.com/sitemap.xml
```

### Test robots.txt

```bash
# Local development
curl http://localhost:3000/robots.txt

# Production
curl https://your-domain.com/robots.txt
```

## Files Modified

| File                             | Purpose                                     |
| -------------------------------- | ------------------------------------------- |
| `next.config.ts`                 | Image optimization, security headers        |
| `src/app/layout.tsx`             | Root metadata, Google Analytics, org schema |
| `src/app/page.tsx`               | Homepage schema markup                      |
| `src/app/sitemap.ts`             | XML sitemap generation                      |
| `src/lib/seo.ts`                 | SEO utilities and schema generators         |
| `src/app/products/[id]/page.tsx` | Product schema markup                       |
| `public/robots.txt`              | Search engine instructions                  |
| `.env.example`                   | Environment configuration template          |

## Key SEO Features

✅ **On-Page SEO**

- Optimized meta tags
- Keyword-rich content
- Proper heading hierarchy
- Image alt text
- Internal linking

✅ **Technical SEO**

- XML Sitemap
- robots.txt
- Structured data (JSON-LD)
- Mobile optimization
- Fast page load
- Security headers
- Canonical URLs

✅ **Off-Page SEO**

- Open Graph tags
- Twitter Card tags
- Schema markup for rich snippets
- Analytics integration ready

## Support Resources

- Next.js SEO: https://nextjs.org/learn/seo/introduction-to-seo
- Google Search Central: https://developers.google.com/search
- Schema.org Documentation: https://schema.org/
- Google Analytics Help: https://support.google.com/analytics
- Google Search Console Help: https://support.google.com/webmasters

---

**Need Help?**
Refer to `SEO-IMPLEMENTATION.md` for detailed information about each SEO feature implemented.
