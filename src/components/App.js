import React, {useEffect} from 'react';
import { useActions } from '../hooks/useActions';
import { LayoutMain } from '../layouts/LayoutMain';

function App() {
  const { app__initApp } = useActions();
  useEffect(() => {
    app__initApp()
  })
  return (
    <LayoutMain />
  );
}

export default App;
