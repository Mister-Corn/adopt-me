import React from "react";

// The below is just the shape of data
// Don't worry about method definitions for example
const SearchContext = React.createContext({
  location: "Los Angeles, CA",
  animal: "",
  breed: "",
  breeds: [],
  handleAnimalChange() {},
  handleBreedChange() {},
  handleLocationChange() {},
  getBreeds() {}
});

export const Provider = SearchContext.Provider;
export const Consumer = SearchContext.Consumer;
