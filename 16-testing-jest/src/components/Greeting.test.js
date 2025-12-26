import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe("Greeting Component", () => {
  test("Renders greeting message", () => {
    // Arrange
    render(<Greeting />);

    // Act

    // Assert
    const HelloWorldElement = screen.getByText(
      "Hello, welcome to our application!"
    );
    screen.getByText("This is a simple greeting component.");

    expect(HelloWorldElement).toBeInTheDocument();
  });

  test("Renders unchanged text", () => {
    // Arrange
    render(<Greeting />);

    // Act

    // Assert
    const notChangedTextElement = screen.getByText(
      "This is a simple greeting component."
    );

    expect(notChangedTextElement).toBeInTheDocument();
  });

  test("Renders changed text after button click", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByText("Change Text");
    userEvent.click(buttonElement);

    // Assert
    const changedTextElement = screen.getByText("The text has been changed!");
    expect(changedTextElement).toBeInTheDocument();
  });

  test('Does not render "This is a simple greeting component." if button is clicked', () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByText("Change Text");
    userEvent.click(buttonElement);

    // Assert
    const outPutElement = screen.queryByText(
      "This is a simple greeting component.",
      { exact: false }
    );
    expect(outPutElement).toBeNull();
  });
});
