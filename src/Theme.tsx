import React, { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from '@storybook/icons';
import { ToggleButton } from 'storybook/internal/components';
import { useStorybookApi } from 'storybook/manager-api';
import { themes } from 'storybook/theming';
import type { Theme } from './types';
import { store, SET_THEME_EVENT } from './store';

const ThemeSwitcher = () => {
  const api = useStorybookApi();
  const [theme, setTheme] = useState(store.get);
  useEffect(() => {
    api.on(SET_THEME_EVENT, setTheme);
    return () => api.off(SET_THEME_EVENT, setTheme);
  }, [api]);

  useEffect(() => {
    api.setOptions({ theme: theme === 'dark' ? themes.dark : themes.light });
  }, [api, theme]);

  function emit(theme: Theme) {
    store.set(theme);
    api.emit(SET_THEME_EVENT, theme);
  }

  return (
    <ToggleButton
      key="theme"
      padding="small"
      variant="ghost"
      pressed={theme === 'dark'}
      onClick={() => {
        emit(theme === 'dark' ? 'light' : 'dark');
      }}
      ariaLabel="Toggle theme"
      tooltip="Toggle theme"
    >
      {theme === 'dark' ? <MoonIcon size={14} /> : <SunIcon size={14} />}
    </ToggleButton>
  );
};

export default React.memo(ThemeSwitcher);
