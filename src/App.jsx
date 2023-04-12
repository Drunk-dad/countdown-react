import React from 'react';
import Eventcountdown from './Eventcoundown/Eventcountdown';

export function App() {
  return (
    <Eventcountdown
      eventDate="04-12-2023 13:32"
      onTick={() => console.log(123)}
      onFinish={() => console.log('onFinish')}
    />
  );
}
