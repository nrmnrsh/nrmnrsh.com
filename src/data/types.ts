export type Metadata = {
  base_url: string;
  seo_title: string;
  seo_description: string;
  share_title: string;
  share_name: string;
  share_description: string;
  share_url: string;
  share_twitter_creator: string;
  share_twitter_card: string;
  app_title: string;
  app_short_title: string;
  app_description: string;
  app_url: string;
  app_color: string;
};

export type FooterData = {
  creator: string;
};

export type IntroContent = {
  headline: string;
  subline: string;
  copy: string;
  schema: Record<string, string>;
};

export type SocialLink = {
  type: string;
  label: string;
  href: string;
};

export type SocialContent = {
  headline: string;
  links: SocialLink[];
};

export type OpenSourceProject = {
  name: string;
  note?: string;
  datePublished?: string;
  details: string[];
  url: string;
  links: Record<string, string>;
};

export type OpenSourceContent = {
  headline: string;
  copy: string;
  links: Record<string, string>;
  projects: OpenSourceProject[];
};

export type Brand = {
  name: string;
  logo: string;
};

export type BrandsContent = {
  headline: string;
  copy: string;
  brands: Brand[];
};
