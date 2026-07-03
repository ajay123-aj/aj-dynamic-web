import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { CartProvider } from "@/components/CartProvider";
import { CartDrawer } from "@/components/CartDrawer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import {
  defaultMetadata,
  generateOrganizationSchema,
  SITE_URL_CONSTANT,
} from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = generateOrganizationSchema();

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Structured Data - Organization Schema */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        {/* Google Site Verification - Replace with your verification code */}
        <meta
          name="google-site-verification"
          content="your-google-verification-code"
        />

        {/* Preconnect to external resources for performance */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />

        {/* Canonical URL */}
        <link rel="canonical" href={SITE_URL_CONSTANT} />

        {/* Alternate link for mobile */}
        <link
          rel="alternate"
          media="only screen and (max-width: 640px)"
          href={SITE_URL_CONSTANT}
        />

        {/* App Links (optional - for mobile app deep linking) */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="Vijay Photo Frame" />

        {/* Theme Color */}
        <meta name="theme-color" content="#000000" />

        {/* Windows Tile */}
        <meta name="msapplication-TileColor" content="#000000" />
      </head>
      <body className="flex min-h-full flex-col">
        <CartProvider>
          {children}
          <CartDrawer />
          <WhatsAppFab />
        </CartProvider>

        {/* Google Analytics - Replace GA_ID with your tracking ID */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GA_ID"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_ID');
            `,
          }}
        />
      </body>
    </html>
  );
}
