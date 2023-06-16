/* eslint-disable react/prop-types */
import { useState } from "react";
import { showAll, showSearch } from "../redux/apiCalls";
import { useDispatch } from "react-redux";

const FindAnime = ({ resetPage }) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    showSearch(input, dispatch);
    resetPage(1);
    setInput("");
  };
  const handleRc = (e) => {
    e.preventDefault();
    showAll(dispatch);
    resetPage(1);
  };
  return (
    <div className="search-container">
      <form action="#">
        <button onClick={handleRc}>Recommended</button>
        <input type="text" value={input} onChange={handleInput} />
        <button onClick={handleSearch}>Find</button>
      </form>
    </div>
  );
};

export default FindAnime;
