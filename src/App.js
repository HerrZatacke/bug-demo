import React from 'react';
import useExampleStore from './stores/exampleStore';
import useApiExampleStore from './stores/apiExampleStore';
// import useBoundStore from './stores/boundStore';
import './App.css';

function App() {
  const onoff = useExampleStore((state) => state.onoff);
  const toggle = useExampleStore((state) => state.toggle);
  const message = useApiExampleStore((state) => state.message);
  const load = useApiExampleStore((state) => state.load);

  // const onoff = useBoundStore((state) => state.onoff);
  // const toggle = useBoundStore((state) => state.toggle);
  // const message = useBoundStore((state) => state.message);
  // const load = useBoundStore((state) => state.load);

  return (
    <div className="app">
      <button
        type="button"
        onClick={load}
      >
        { message }
      </button>
      <br />
      <button
        type="button"
        onClick={toggle}
      >
        { onoff ? 'true' : 'false' }
      </button>
    </div>
  );
}

export default App;
