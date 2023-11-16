import React from "react";
import { fetchAPI } from "../lib/api";
import { Button } from "./Button";
import { Input } from "./Input";

export const Search = ({ onSearch }) => {
  const [value, setValue] = React.useState("");

  const handleSearch = () => {
    searchCharacter(value);
  };

  async function searchCharacter(value) {
    const data = await fetchAPI("/people", { search: value });
    onSearch(data.results);
  }

  return (
    <div className="w-96 mx-auto my-6 flex flex-row gap-x-3">
      <Input
        value={value}
        type={"text"}
        setValue={setValue}
        placeholder={"Search by character name"}
      />
      <Button
        onClick={() => {
          handleSearch(value);
        }}
      >
        Search
      </Button>
    </div>
  );
};
