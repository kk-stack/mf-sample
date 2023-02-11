import React from "react";
import Button from './Button';
import Card from "./Card";

const App = () => {
  return (
    <>
      <h1>Component Library</h1>
      <Button>Hello</Button>
      <Card>
        <h3>Card title</h3>
        <p>Card description</p>
        <Button primary>Card Button</Button>
      </Card>
    </>
  );
};

export default App;