import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "./globals.css";
import { ThemeProvider } from "../components/them-provider";
import { Poppins } from "next/font/google";
import "animate.css";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import icon from "@/app/assets/favicon.ico"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

const BASE_URL = "https://niraina-andriamiarintsoa.vercel.app";


export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "referencement" });

  const title = t("title");
  const description = t("description");

  return {
    title: {
      default: title,
      template: `%s | Niraina Andriamiarintsoa`,
    },
    description,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
      languages: {
        fr: `${BASE_URL}/fr`,
        en: `${BASE_URL}/en`,
        de: `${BASE_URL}/de`,
      },
    },
    openGraph: {
      type: "website",
      url: `${BASE_URL}/${locale}`,
      title,
      description,
      siteName: "Niraina Andriamiarintsoa",
      locale,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
    keywords: [
      "développeur frontend",
      "frontend developer",
      "web developer",
      "webentwickler",
      "JavaScript",
      "TypeScript",
      "développeur web",
      "React",
      "Next.js",
      "TypeScript",
      "WordPress",
      "Tailwind CSS",
      "Madagascar",
      "Antananarivo",
      "Niraina",
    ],
    icons: {
      icon: icon.src,
    },
    verification: {
      google: "54ycNVdGpxpMZusAtHAuISSzoCdr7DLuC6-2W1szFP8",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    // 2. Appliquer la font comme variable CSS
    <html lang={locale} className={poppins.variable}>
      <body>
        <NextIntlClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
