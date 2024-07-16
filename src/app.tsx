import React from "react";
import Button from "./component/button";

const App: React.FC = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div className="p-4">
      <h1 className="mb-4 text-2xl">Welcome to My App</h1>
      <Button
        onClick={handleClick}
        label="Click Me"
        className="text-white bg-blue-500 hover:bg-blue-700"
      />
    </div>
  );
};
export default App;
