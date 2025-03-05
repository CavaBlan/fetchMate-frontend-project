import { useEffect, useState } from "react";
import FavoriteDogCard from "./FavoriteDogCard";
import MatchModal from "./MatchModal";

function FavoriteList({ selectedDogs, setSelectedDogs }) {
  const [page, setPage] = useState(1);
  const [matchModal, setMatchModal] = useState(false);
  const [matchedDog, setMatchedDog] = useState();
  const maxPage = Math.ceil(selectedDogs.length / 5);
  const sliceFrom = (page - 1) * 5;
  const Ids = selectedDogs.map((dog) => dog.id);

  const matchUrl = "https://frontend-take-home-service.fetch.com/dogs/match";

  useEffect(() => {
    console.log("Ids", Ids);
  }, [selectedDogs]);

  function handleRemove(id) {
    setSelectedDogs((prev) => prev.filter((item) => item.id !== id));
  }

  function handleModalTrigger() {
    setMatchModal((prev) => !prev);
    // setMatchModal(false);
  }

  function handleMatch() {
    handleModalTrigger();
    fetch(matchUrl, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Ids),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Matched dog ID:", data.match);
        const matched = selectedDogs.find((item) => item.id === data.match);
        setMatchedDog(matched);
      })
      .catch((err) => {
        console.log(err);
        alert(err.message);
      });
  }

  return (
    <div className="h-150 w-100 mt-20 mx-3 bg-white border-4 border-orange-300 sticky top-10 rounded-4xl shadow-2xl">
      <div className="h-4/5">
        <div className="mt-5 flex justify-center gap-5">
          <button
            className="text-lg cursor-pointer"
            onClick={() => setPage((prev) => (prev > 1 ? prev - 1 : prev))}
          >
            &larr;
          </button>
          <div>{page}</div>
          <button
            className="text-lg cursor-pointer"
            onClick={() =>
              setPage((prev) => (prev < maxPage ? prev + 1 : prev))
            }
          >
            &rarr;
          </button>
        </div>
        <div className="mt-2">
          {/* {Array.from({ length: 5 }, (_, index) => (
            <FavoriteDogCard
              selectedDogs={selectedDogs}
              setSelectedDogs={setSelectedDogs}
            />
          ))} */}
          {/* {selectedDogs.map((dog, index) => (
            <FavoriteDogCard key={index} dogInfo={dog}/>
          ))} */}
          {selectedDogs.slice(sliceFrom, sliceFrom + 5).map((dog, index) => (
            <FavoriteDogCard
              key={index}
              dogInfo={dog}
              handleRemove={handleRemove}
            />
          ))}
        </div>
      </div>
      <div className="h-1/8 flex">
        <button
          className="p-2 m-auto border-3 text-3xl text-white bg-orange-300 border-orange-300 hover:scale-110 transition rounded-2xl cursor-pointer"
          onClick={handleMatch}
        >
          Match
        </button>
      </div>
      {matchModal && matchedDog && (
        <MatchModal
          matchedDog={matchedDog}
          handleModalTrigger={handleModalTrigger}
        />
      )}
    </div>
  );
}

export default FavoriteList;
