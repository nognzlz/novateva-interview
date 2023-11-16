import "./App.css";
import { useEffect, useState } from "react";
import { Title } from "./components/Title";
import { fetchAPI } from "./lib/api";
import { Table } from "./components/Table";
import { Pagination } from "./components/Pagination";
import { Search } from "./components/Search";

function App() {
  const [characters, setCharacters] = useState([]);
  const [pageNumbers, setPageNumbers] = useState(0);

  const PAGE_SIZE = 10;

  useEffect(() => {
    fetchAPI("/people").then((data) => {
      setCharacters(data.results);
      setPageNumbers(data.count / PAGE_SIZE);
    });
  }, []);

  const handleSearch = (searchResults) => {
    setCharacters(searchResults);
  };

  if (!characters.length)
    return (
      <div className="w-full">
        <Title>Star Wars characters table</Title>
        <p>Loading...</p>
      </div>
    );

  return (
    <div className="App">
      <Title>Star Wars characters table</Title>
      <Search onSearch={handleSearch} />
      <Table characters={characters} />
      <Pagination pageNumbers={pageNumbers} />
    </div>
  );
}

export default App;
