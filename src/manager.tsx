import { addons, types } from 'storybook/manager-api';

import ThemeRender from './Theme';

addons.register('storybook-theme', () => {
  addons.add('storybook-theme/render', {
    title: 'Themes',
    type: types.TOOL,
    match: ({ tabId, viewMode }) => !tabId && (viewMode === 'story' || viewMode === 'docs'),
    render: ThemeRender,
  });
});
