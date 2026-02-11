import es from './es.json';
import en from './en.json';

export type Language = 'es' | 'en';
export const defaultLang: Language = 'es';

const translations: Record<Language, Record<string, string>> = { es, en };

/** Build-time translation function. Renders Spanish (default). */
export function t(key: string): string {
  return translations.es[key] ?? key;
}

/** Returns the full English translations as a JSON string for client-side hydration. */
export function getEnJSON(): string {
  return JSON.stringify(translations.en);
}
