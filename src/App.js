import React from "react";
import { render } from "react-dom";
import { Pet } from "./Pet";

class App extends React.Component {
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, "Adopt me!"),
  //   React.createElement(Pet, {
  //     name: "Luna",
  //     animal: "dog",
  //     breed: "Havanese"
  //   }),
  //   React.createElement(Pet, {
  //     name: "Pepper",
  //     animal: "bird",
  //     breed: "Cockatiel"
  //   }),
  //   React.createElement(Pet, {
  //     name: "Doink",
  //     animal: "cat",
  //     breed: "Mixed"
  //   })
  // ]);

  handleTitleClick() {
    alert("you clicked on the title!");
  }

  render() {
    return (
      <div>
        <h1>Adopt me</h1>
        <Pet name="Luna" animal="dog" breed="Havanese" />
        <Pet name="Pepper" animal="bird" breed="Cockatiel" />
        <Pet name="Doink" animal="cat" breed="Mixed" />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
// `createElement` can handle a string, or actual components you wrote
