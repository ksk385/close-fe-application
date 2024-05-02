const { render, screen } = require("@testing-library/react");
// import dependencies
const React = require("react");
// require("@testing-library/jest-dom");
const { List } = require("./component");

test("loads and displays buttons", async () => {
  // ARRANGE
  const items = [
    { name: "tiny navy apple", color: "navy" },
    { name: "tiny navy banana", color: "navy" },
    { name: "tiny navy watermelon", color: "navy" },
  ];
  render(<List items={items} />);

  // ASSERT
  expect(screen.getByRole("heading")).toHaveTextContent("hello there");
  expect(screen.getByRole("button")).toBeDisabled();
});
