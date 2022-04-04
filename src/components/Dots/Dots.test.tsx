import React from "react";
import { render } from "@testing-library/react";

import Dots from "./Dots";

describe("Dots", () => {
  test("renders the Dots component", () => {
    render(<Dots />);
  });
});