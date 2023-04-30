import React from "react";

import { API } from "./environment";
import type { Foo } from "./Foo"; // testing consistent type imports

export function App() {
  const foo: Foo = "asdf";
  console.log(foo); // needed to test eslint warnings
  console.log(API);

  return <div>Hello</div>;
}
