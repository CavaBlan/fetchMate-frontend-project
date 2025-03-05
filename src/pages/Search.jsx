import { useState } from "react";
import DogCardsContainer from "../components/DogCardsContainer";
import HomeLogo from "../components/HomeLogo";
import SearchBar from "../components/SearchBar";
import Logout from "../components/Logout";

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchType, setSearchType] = useState("breeds");

  return (
    <div>
      <header className="h-80 w-full mt-0 p-1  bg-orange-200">
        <Logout/>
        <HomeLogo />
        <SearchBar searchType={searchType} setSearchType={setSearchType} setSearchValue={setSearchValue} />
      </header>
      <main className="bg-green-50">
        <DogCardsContainer searchValue={searchValue} searchType={searchType} />
      </main>
    </div>
  );
}

export default Search;
