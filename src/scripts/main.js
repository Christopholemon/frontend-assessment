import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from './components';

setTimeout(
  () => {
    ReactDOM.render(
      <Tabs />,
      document.getElementById('tabs')
    )
  },
  2000
);
