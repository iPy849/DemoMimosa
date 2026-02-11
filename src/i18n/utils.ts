import es from './es.json';
import en from './en.json';

export type Language = 'es' | 'en';
export const defaultLang: Language = 'es';

const translations: Record<Language, Record<string, string>> = { es, en };

/** Build-time translation function. Renders Spanish (default). */
export function t(key: string): string {
  return translations.es[key] ?? key;
}

/** Returns all translations as JSON strings for client-side hydration. */
export function getEsJSON(): string {
  return JSON.stringify(translations.es);
}
export function getEnJSON(): string {
  return JSON.stringify(translations.en);
}
