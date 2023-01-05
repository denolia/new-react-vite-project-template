import React from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.createElement("div");

document.body.appendChild(rootElement);

function App() {
  return <div>Hello</div>;
}
const root = createRoot(rootElement);
root.render(<App />);
