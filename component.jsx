const React = require("react");
const { Fragment, useState } = React;

// Implement a feature to allow item selection with the following requirements:
// 1. Clicking an item selects/unselects it.
// 2. Multiple items can be selected at a time.
// 3. Make sure to avoid unnecessary re-renders of each list item in the big list (performance).
// 4. Currently selected items should be visually highlighted.
// 5. Currently selected items' names should be shown at the top of the page.
//
// Feel free to change the component structure at will.

const List = ({ items }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const toggleSelect = (selected, item) => {
    console.debug("toggle selected", item, selected);
    if (!selected) {
      console.debug("selecting item");
      setSelectedItems([...selectedItems, item]);
    } else if (selected) {
      console.debug("unselecting item");
      setSelectedItems(
        selectedItems.filter((selectedItem) => {
          return selectedItem !== item;
        })
      );
    }
  };

  return (
    <Fragment>
      <h2>Selected Items:</h2>
      {selectedItems.length === 0 && <p>None</p>}
      <ul aria-labelledby="selected-items">
        {selectedItems.map((item) => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>

      <hr></hr>
      <h2>Items:</h2>
      <ul className="List" aria-label="items">
        {items.map((item) => {
          const selected = selectedItems.includes(item);
          return (
            <li
              key={item.name}
              className={`List__item ${
                selected ? "List__item--selected" : ""
              } List__item--${item.color}`}
              onClick={(e) => toggleSelect(selected, item)}
            >
              {item.name}
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
};

// ---------------------------------------
// Do NOT change anything below this line.
// ---------------------------------------

const sizes = ["tiny", "small", "medium", "large", "huge"];
const colors = [
  "navy",
  "blue",
  "aqua",
  "teal",
  "olive",
  "green",
  "lime",
  "yellow",
  "orange",
  "red",
  "maroon",
  "fuchsia",
  "purple",
  "silver",
  "gray",
  "black",
];
const fruits = [
  "apple",
  "banana",
  "watermelon",
  "orange",
  "peach",
  "tangerine",
  "pear",
  "kiwi",
  "mango",
  "pineapple",
];

const items = sizes.reduce(
  (items, size) => [
    ...items,
    ...fruits.reduce(
      (acc, fruit) => [
        ...acc,
        ...colors.reduce(
          (acc, color) => [
            ...acc,
            {
              name: `${size} ${color} ${fruit}`,
              color,
            },
          ],
          []
        ),
      ],
      []
    ),
  ],
  []
);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<List items={items} />);

module.exports = { List };
