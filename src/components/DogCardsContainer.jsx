import { useEffect, useState } from "react";
import DogCard from "./DogCard";
import FavoriteList from "./FavoriteList";
import SortSelector from "./SortSelector";

function DogCardsContainer({ searchValue, searchType }) {
  const [page, setPage] = useState(1);
  const [totalDogs, setTotalDogs] = useState(0);
  const [selectedDogs, setSelectedDogs] = useState([]);
  const [dogs, setDogs] = useState([]);
  const [sortType, setSoryType] = useState("breed:asc");

  const maxPage = Math.ceil(totalDogs / 16);

  useEffect(() => {
    console.log(selectedDogs);
  }, [selectedDogs]);

  useEffect(() => {
    // If the user does not select, all dogs are displayed by default
    const query = searchValue ? `${searchType}=${searchValue}` : "";
    const apiUrl = `https://frontend-take-home-service.fetch.com/dogs/search?${query}&size=16&from=${
      (page - 1) * 16
    }&sort=${sortType}`;

    fetch(apiUrl, {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTotalDogs(data.total);
        return fetch("https://frontend-take-home-service.fetch.com/dogs", {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data.resultIds.slice(0, 16)),
        });
      })
      .then((res) => res.json())
      .then((dogData) => {
        setDogs(dogData);
        console.log(dogData);
      })
      .catch((err) => console(err));
  }, [page, searchType, searchValue, sortType]);

  function handleSelect(dog) {
    setSelectedDogs((prev) => {
      if (prev.some((item) => item.id === dog.id)) {
        alert("Already in the favorite list!");
        return prev;
      } else {
        return [...prev, dog];
      }
    });
  }

  return (
    <section className="w-full flex justify-center">
      <div className="w-8/12">
        <SortSelector setSoryType={setSoryType}/>
        <div className="mt-5 grid grid-cols-4 gap-3 place-items-center">
          {/* {Array.from({ length: 16 }, (_, index) => (
            <DogCard key={index} />
          ))} */}
          {dogs.map((dog, index) => (
            <DogCard key={index} dog={dog} handleSelect={handleSelect} />
          ))}
        </div>
        <div className="flex justify-center gap-10 mb-10">
          <button
            className="p-2 text-3xl hover:scale-105 transition cursor-pointer text-white bg-orange-300 rounded-2xl"
            onClick={() => setPage((prev) => (prev > 1 ? prev - 1 : prev))}
          >
            Prev
          </button>
          <div className="p-2 text-3xl">{page}</div>
          <button
            className="p-2 text-3xl hover:scale-105 transition cursor-pointer text-white bg-orange-300 rounded-2xl"
            onClick={() =>
              setPage((prev) => (prev < maxPage ? prev + 1 : prev))
            }
          >
            Next
          </button>
        </div>
      </div>
      <div>
        <FavoriteList
          selectedDogs={selectedDogs}
          setSelectedDogs={setSelectedDogs}
        />
      </div>
    </section>
  );
}

export default DogCardsContainer;
