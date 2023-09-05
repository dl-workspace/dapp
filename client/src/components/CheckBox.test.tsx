import '@testing-library/jest-dom'
import { fireEvent, render } from "@testing-library/react"
import CheckBox from "./CheckBox"

test("Selecting checkbox should change the value to true", () => {
  const { getByLabelText } = render(<CheckBox />);
  const checkbox = getByLabelText(/not checked/i);
  fireEvent.click(checkbox);
  expect(checkbox).toBeTruthy();
})