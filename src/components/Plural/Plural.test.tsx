import React from "react";
import { render } from "@testing-library/react";

import Plural from "./Plural";

describe("Plural", () => {
  test("renders the Plural component", () => {
    render(<Plural count={1} single="String shown when count is 1" plural="String shown when count is more than one or zero" />);
  });
});