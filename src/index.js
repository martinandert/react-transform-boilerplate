import React from 'react';
import { render } from 'react-dom';
import { App } from './App';

render(<App />, document.getElementById('root'));

if (module.hot) {
  const source = new EventSource('/__webpack_hmr');
  source.onmessage = (e) => {
    if (e.data === '\uD83D\uDC93') return;
    const data = JSON.parse(e.data);
    if (data.action !== 'built') return;
    const sheets = document.styleSheets;
    console.log('[CSS-in-JS HMR] Reloading...');

    for (let i = 0, ii = sheets.length; i < ii; i++) {
      sheets[i].ownerNode.href = sheets[i].href + '?hmr';
    };
  };
}
