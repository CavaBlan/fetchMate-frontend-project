import { useState } from "react";

function MatchModal({ matchedDog, handleModalTrigger }) {
  const [dogInfo, setDogInfo] = useState(matchedDog);

  return (
    // overlay -> box -> matched dog
    <div className="bg-amber-100/90 fixed inset-0 flex justify-center items-center">
      <div className="h-150 w-130 bg-amber-50/90 border border-orange-300 rounded-2xl flex flex-col items-center">
        <div className="mt-10 mb-10 text-5xl text-orange-500">
          Congratulation!
        </div>
        <div className="text-3xl flex flex-col items-center gap-3">
          <img className="h-50 w-50 mb-5 border" src={dogInfo.img} alt="Dog" />
          <div className="text-5xl text-orange-500">{dogInfo.name}</div>
          <div>{dogInfo.position}</div>
        </div>
        <div className="mt-10">
          <button
            className="p-3 mx-3 text-3xl text-white bg-orange-300 rounded-3xl cursor-pointer hover:scale-105 transition"
            onClick={() => {
              handleModalTrigger();
              setDogInfo({});
            }}
          >
            Cancel
          </button>
          <button
            className="p-3 mx-3 text-3xl text-white bg-orange-300 rounded-3xl cursor-pointer hover:scale-105 transition"
            onClick={() => {
              alert("We will (not) contact you soon!");
              handleModalTrigger();
            }}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default MatchModal;
