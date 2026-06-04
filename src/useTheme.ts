import { useEffect, useState } from 'react';
import { addons } from 'storybook/preview-api';
import { store, SET_THEME_EVENT } from './store';

export { type Theme } from './types';

export function useTheme() {
  const [theme, setTheme] = useState(store.get);
  const channel = addons.getChannel();
  useEffect(() => {
    channel.on(SET_THEME_EVENT, setTheme);
    return () => channel.off(SET_THEME_EVENT, setTheme);
  }, [channel]);
  return theme;
}
