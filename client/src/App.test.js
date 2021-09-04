import { render, screen } from "@testing-library/react";
import App from "./App";

test("Render main app component.", () => {
  render(<App />);
  const linkElement = screen.getByText(/Add Book/);
  expect(linkElement).toBeInTheDocument();
});
