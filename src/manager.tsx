import { addons, types } from 'storybook/manager-api';

import ThemeRender from './Theme';

addons.register('story-theme', () => {
  addons.add('story-theme', {
    title: 'Themes',
    type: types.TOOL,
    paramKey: 'theme',
    match: ({ tabId, viewMode }) => !tabId && (viewMode === 'story' || viewMode === 'docs'),
    render: ThemeRender,
  });
});
