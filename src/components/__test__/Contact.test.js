import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Contact us page test case", () => {
  test("Should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  test("Should load button inside contact component", () => {
    render(<Contact />);

    const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();
  });

  describe("Contact us page input boxes test case", () => {
    test("Should load textbox inside contact component", () => {
      render(<Contact />);

      const inputBoxes = screen.getAllByRole("textbox");

      expect(inputBoxes.length).toBe(2);
    });
  });
});
