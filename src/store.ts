export type Theme = 'light' | 'dark';

export const THEME_STORAGE_KEY = 'theme';
export const SET_THEME_EVENT = 'set-theme';

export const store = {
  get() {
    return (localStorage.getItem(THEME_STORAGE_KEY) || 'light') as Theme;
  },
  set(theme: Theme) {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  },
};
