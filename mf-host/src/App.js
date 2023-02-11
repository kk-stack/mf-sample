import React, {Suspense, lazy, useState} from "react";

const App = () => {
  const [loadBiDi, setLoadBiDi] = useState(false);
  const BiDiApp = lazy(() => import('MFBiDi/App'));
  return (
    <>
      <h1>MF Host</h1>
      <hr />{/* We are adding a hr to clearly separate Host and BiDi app */}
      {
        loadBiDi ? 
          <Suspense fallback={<p>loading</p>}><BiDiApp /></Suspense> : 
          <button onClick={() => setLoadBiDi(true)}>Load Bi Di App</button>
      }
    </>
  );
};

export default App;