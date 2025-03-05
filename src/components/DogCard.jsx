import { useState } from "react";

const DOG_AGE_GROUPS = ["Puppy", "Young", "Adult", "Senior"];

const dogInfo = {
  id: "051145",
  img: "🐶",
  name: "Luner",
  age: 5,
  zip_code: "60201",
  breed: "Shiba Inu",
};

function DogCard({ dog, handleSelect }) {
  //Remember to change the name
  const { id, img, name, age, zip_code, breed, city, state } = dog;
  const [isSelected, setIsSelected] = useState(false);

  function getAgeGroup(age) {
    if (age >= 0 && age < 1) return DOG_AGE_GROUPS[0];
    if (age >= 1 && age < 3) return DOG_AGE_GROUPS[1];
    if (age >= 3 && age < 7) return DOG_AGE_GROUPS[2];
    if (age >= 7) return DOG_AGE_GROUPS[3];
    return "Unknown";
  }

  return (
    <div
      className={`h-110 w-70 mb-10 bg-white ${
        isSelected && "border-3 border-amber-600"
      } hover:scale-105 hover:rotate-2 hover:shadow-gray-500 transition rounded-2xl flex flex-col items-center gap-3 cursor-pointer shadow-2xl`}
      onClick={() => handleSelect(dog)}
    >
      {/* <div className="h-2/4 w-full border rounded-2xl">{img}</div> */}
      <img className="h-7/12 w-full rounded-2xl" src={img} alt={id} />
      <div className="text-4xl text-orange-500 font-bold">{name}</div>
      <p >{breed}</p>
      <p className="text-2xl">
        {getAgeGroup(age)} · {age}
      </p>
      {/* <p>{zip_code}</p> */}
      <p className="w-full p-3 bg-blue-100 text-center font-bold mt-auto">
        {city} · {state}
      </p>
    </div>
  );
}

export default DogCard;
