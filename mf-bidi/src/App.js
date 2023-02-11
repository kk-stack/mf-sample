import React from "react";
import Button from "MFComponents/Button";
import Card from "MFComponents/Card";

const App = () => {
  return (
    <>
      <Card>
        <h3>Bi directional app</h3>
        <p>This app imports Card and Button from mf-components</p>
        <Button primary>Card Button</Button>
      </Card>
    </>
  );
};

export default App;