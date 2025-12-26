import { render, screen, waitFor } from "@testing-library/react";
import Async from "./Async";

describe("Async Component", () => {
  test("Renders posts after fetch if succeeds", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [
        { id: "p1", title: "First Post" },
        { id: "p2", title: "Second Post" },
      ],
    });

    // Arrange
    render(<Async />);

    // Act
    await waitFor(() => {
      const listItemElements = screen.getAllByRole("listitem");
      expect(listItemElements.length).toBeGreaterThan(0);
    });

    // Assert
    expect(screen.getAllByRole("listitem").length).toBeGreaterThan(0);
  });
});
