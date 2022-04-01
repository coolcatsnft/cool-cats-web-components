import React from "react";
import { render } from "@testing-library/react";

import BooleanVisibilityContainer from "./BooleanVisibilityContainer";

describe("BooleanVisibilityContainer", () => {
  test("renders the BooleanVisibilityContainer component", () => {
    render(<BooleanVisibilityContainer>BooleanVisibilityContainer</BooleanVisibilityContainer>);
  });
});