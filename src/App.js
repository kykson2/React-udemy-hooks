import React, { useState } from "react";
import Accordian from "./component/Accordion";
import Search from "./component/Search";
import Dropdown from "./component/Dropdown";
import Route from "./component/Route";
import Header from "./component/Header";

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

const options = [
  {
    label: "The color Red",
    value: "red",
  },
  {
    label: "The color Green",
    value: "green",
  },
  {
    label: "A shade of Blue",
    value: "blue",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);
  return (
    <div>
      <Header />
      <Route path="/">
        <Accordian items={items} />
      </Route>
      <Route path="/dropdown">
        <div>
          <button onClick={() => setShowDropdown(!showDropdown)}>
            Toggle Dropdown
          </button>
          {showDropdown ? (
            <Dropdown
              selected={selected}
              onSelectedChange={setSelected}
              options={options}
            />
          ) : null}
        </div>
      </Route>
      <Route path="/search">
        <Search />
      </Route>
    </div>
  );
};

export default App;
