export type Language = 'en' | 'ru' | 'he';

export interface ServiceItem {
  title: string;
  description: string;
  features: string[];
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Content {
  nav: {
    home: string;
    services: string;
    process: string;
    about: string;
    gallery: string;
    contact: string;
  };
  hero: {
    title: string;
    highlight: string;
    subtitle: string;
    cta: string;
    secondaryCta: string;
    badge: string;
  };
  services: {
    sectionTitle: string;
    sectionSubtitle: string;
    securityTitle: string;
    securitySubtitle: string;
    infraTitle: string;
    infraSubtitle: string;
    cctv: ServiceItem;
    alarms: ServiceItem;
    telephony: ServiceItem;
    networking: ServiceItem;
    fiber: ServiceItem;
    racks: ServiceItem;
  };
  process: {
    title: string;
    subtitle: string;
    steps: ProcessStep[];
  };
  about: {
    title: string;
    subtitle: string;
    description1: string;
    description2: string;
  };
  faq: {
    title: string;
    subtitle: string;
    items: FAQItem[];
  };
  gallery: {
    title: string;
    subtitle: string;
    viewAll: string;
    close: string;
  };
  contact: {
    title: string;
    subtitle: string;
    formTitle: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    phonePlaceholder: string;
    messagePlaceholder: string;
    submitButton: string;
    address: string;
  };
  footer: {
    rights: string;
    description: string;
  };
}