import React from "react";
import { create } from "react-test-renderer";
import { Details } from "../Details";

/*
What is a snapshot test?

If the page is finished, the markup for the page will be stored, and
will be used to test in the future. If the page changes in the future,
the snapshot will differ from the current, and the test will fail.
*/

test("snapshot", () => {
  const c = create(<Details />);
  expect(c.toJSON()).toMatchSnapshot();
});

test ("show modal when toggleModal is called", () => {
  const c = create(<Details search={() => {}} />);
  const instance = c.getInstance();

  expect(instance.state.showModal).toBe(false);
  
})