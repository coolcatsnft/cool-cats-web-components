import React from "react";
import { render } from "@testing-library/react";

import List from "./List";

describe("List", () => {
  test("renders the List component with a single item", () => {
    render(
      <List>
        <>List</>
      </List>
    );
  });

  test("renders the List component with a mulitple items", () => {
    render(
      <List>
        <>Item 1</>
        <>Item 2</>
      </List>
    );
  });
});