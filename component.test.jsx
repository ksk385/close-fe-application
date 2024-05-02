const { render, screen, within } = require("@testing-library/react");
// import dependencies
const React = require("react");
require("@testing-library/jest-dom");
const { List } = require("./component");

test("loads and displays 3 items", async () => {
  // ARRANGE
  const items = [
    { name: "tiny navy apple", color: "navy" },
    { name: "tiny navy banana", color: "navy" },
    { name: "tiny navy watermelon", color: "navy" },
  ];
  render(<List items={items} />);

  // ASSERT
  expect(await screen.findByText("Selected Items:")).toBeVisible();
  expect(await screen.findByText("None")).toBeVisible();
  expect(await screen.findByText("Items:")).toBeVisible();
  const list = screen.getByRole("list", {
    name: /items/i,
  });
  const { getAllByRole } = within(list);
  const listItems = getAllByRole("listitem");
  expect(listItems.length).toBe(3);
});
