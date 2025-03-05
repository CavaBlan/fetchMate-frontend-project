// const dogInfo = {
//   id: "051145",
//   img: "🐶",
//   name: "Luner",
//   age: 5,
//   zip_code: "60201",
//   breed: "Shiba Inu",
// };

function FavoriteDogCard({dogInfo, handleRemove}) {
  //Remember to change the name
  const { id, img, name, age, zip_code, breed, city, state } = dogInfo;

  return (
    //box
    <div className="h-20 mx-2 my-1 bg-amber-50 border-2 border-amber-300 rounded-2xl flex items-center gap-3">
      {/* left side */}
      <div className="flex items-center">
        <div className="">
          {/* <div className="h-15 w-15 mx-3 bg-white">{img}</div> */}
          <img className="h-15 w-15 mx-2 bg-white rounded-2xl" src={img} alt="" />
        </div>
        <div className="m-3">
          <div className="text-2xl font-bold">
            {name} 
          </div>
          <div>{city} · {state}</div>
        </div>
      </div>
      {/* right side */}
      <div className="ml-auto mx-7">
        <button className="p-2 bg-orange-600 text-white rounded-2xl hover:scale-105 cursor-pointer" onClick={()=>handleRemove(id)}>Remove</button>
      </div>
    </div>
  );
}

export default FavoriteDogCard;
