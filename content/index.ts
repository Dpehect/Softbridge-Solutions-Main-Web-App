export type ContentPage = {
  slug: string;
  locale: string;
  title: string;
  description: string;
  indexable: boolean;
  status: "draft" | "published" | "archived";
  publishedAt?: string;
  sections: Array<{
    heading?: string;
    body: string;
  }>;
  faq?: Array<{
    question: string;
    answer: string;
  }>;
  sources?: Array<{
    name: string;
    url: string;
    accessedAt: string;
  }>;
};

/**
 * Compatibility export for legacy content-audit scripts.
 *
 * The current emergency-repair build renders market pages directly from
 * app/[market]/page.tsx, so there are no legacy content records to audit.
 */
export const pages: ContentPage[] = [];
