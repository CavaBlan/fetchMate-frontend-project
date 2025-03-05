import { useEffect, useState } from "react";
import Select from "react-select";

function SearchBar({ searchType, setSearchType, setSearchValue }) {
  const [selectValue, setSelectValue] = useState(null);

  const [options, setOptions] = useState([]);
  const url = "https://frontend-take-home-service.fetch.com/dogs/";


  //fake list for testing
  // const options = [
  //   { value: "aaa", label: "aaa" },
  //   { value: "bbb", label: "bbb" },
  //   { value: "ccc", label: "ccc" },
  //   { value: "ddd", label: "ddd" },
  //   { value: "eee", label: "eee" },
  // ];

  useEffect(() => {
    if (searchType === "breeds") {
      fetch(`${url}${searchType}`, {
        method: "GET",
        credentials: "include",
      })
        .then((res) => res.json())
        .then((data) => {
          const allOptions = data.map((breed) => ({
            value: breed,
            label: breed,
          }));
          setOptions(allOptions);
        })
        .catch((err) => {
          console.error(err);
          alert(err);
        });
    } else {
      setOptions([]);
    }
  }, [searchType]);

  //search bar style
  const searchBoxStyle = {
    control: (provided) => ({
      ...provided,
      padding: "5px",
      borderRadius: "0px 20px 20px 0px",
      border: "3px solid #f97316",
      ":hover": {
        borderColor: "#f97316",
      },
      cursor: "text",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? "#f97316"
        : state.isFocused && "#fee2e2",
      cursor: "pointer",
    }),
    menu: (provided) => ({
      ...provided,
      padding: "0px 3px",
    }),
  };

  return (
    <div className="h-20 w-full mt-10 flex justify-center items-center">
      
      <button
        className="py-4 w-25 bg-white font-bold border-2 border-r-0 border-orange-500 rounded-l-2xl cursor-pointer"
        // onClick={() =>
        //   setSearchType((prev) => (prev === "breeds" ? "zipCodes" : "breeds"))
        // }
      >
        {searchType}
      </button>
      <Select
        className="w-2/7 text-2xl"
        options={options}
        value={selectValue}
        onChange={setSelectValue}
        isClearable={true}
        placeholder="Search"
        styles={searchBoxStyle}
      />
      <button
        onClick={() => setSearchValue(selectValue ? selectValue.value : "")}
        className="h-15 mx-5 px-5 border-3 text-3xl font-bold text-orange-500 hover:bg-orange-500 hover:text-white hover:border-orange-500 rounded-3xl cursor-pointer"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
