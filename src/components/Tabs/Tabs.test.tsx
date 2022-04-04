import React from "react";
import { render } from "@testing-library/react";

import Tabs from "./Tabs";

describe("Tabs", () => {
  test("renders the Tabs component", () => {
    render(<Tabs tabs={['Tab 1']}><>Tab pane 1</></Tabs>);
  });
});