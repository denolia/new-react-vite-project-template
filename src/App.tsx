import React from "react";

import type { Foo } from "@app/Foo";

export function App() {
  const foo: Foo = "asdf";
  console.log(foo);
  return <div>Hello</div>;
}
