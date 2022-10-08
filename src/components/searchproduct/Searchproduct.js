import React, { useState, useEffect } from "react";
import { BsPlusLg } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import IMG1 from "../../images/image1.png";
import IMG2 from "../../images/image2.png";
import IMG3 from "../../images/image3.png";
import IMG4 from "../../images/image4.png";
import IMG5 from "../../images/image5.png";
import IMG6 from "../../images/image6.png";
import { Link } from "react-router-dom";

const data = [
  {
    id: 0,
    image: IMG1,
    title: "Coffe Like and Love",
    price: "$150",
    paragraph:
      "coffee that contains the right sugar taste coupled with a delicious coffee taste Read more....",
  },
  {
    id: 1,
    image: IMG2,
    title: "Tea Nice",
    price: "$150",
    paragraph:
      "coffee that contains the right sugar taste coupled with a delicious coffee taste Read more....",
  },
  {
    id: 2,
    image: IMG3,
    price: "$160",
    title: "Coffe Thor",
    paragraph:
      "coffee that contains the right sugar taste coupled with a delicious coffee taste Read more....",
  },
  {
    id: 3,
    image: IMG4,
    price: "$140",
    title: "Tea Healthy",
    paragraph:
      "coffee that contains the right sugar taste coupled with a delicious coffee taste Read more....",
  },
  {
    id: 4,
    image: IMG5,
    title: "Coffe Health",
    price: "$130",
    paragraph:
      "coffee that contains the right sugar taste coupled with a delicious coffee taste Read more....",
  },
  {
    id: 5,
    image: IMG6,
    title: "Coffe Like and Love",
    price: "$120",
    paragraph:
      "coffee that contains the right sugar taste coupled with a delicious coffee taste Read more....",
  },
];

function Searchproduct({ name }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [Id, setId] = useState("");

  const handleChange = (e) => setSearchTerm(e.target.value);

  useEffect(() => {
    const results = data.filter((o) =>
      o.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);

  const handleClick = (id) => {
    const selectedItem = data[id];

    localStorage.setItem("my_clickedproduct", JSON.stringify(selectedItem));
    setId(id);
  };

  return (
    <div className=" ">
      <input
        className="w-[210px] sm:w-[315px] h-[44px] focus:outline-0 border-[2px]  border-[#3D54FF] ml-[30px] rounded-3xl mt-4 pl-[30px] pr-[20px]"
        placeholder="Search"
        value={searchTerm}
        type="text"
        onChange={handleChange}
      />
      <div className="flex justify-start w-full">
        <BsPlusLg className="mt-[8px] text-[#8C98F5] ml-[20px] mb-6 w-[25px]  h-[25px]" />
      </div>
      <div className="flex justify-center items-center flex-col">
        {searchResults &&
          searchResults.map(({ id, image, title, paragraph, price }) => (
            <button
              key={id}
              onClick={() => {
                handleClick(id);
                setId(id);
              }}
              className={`w-[280px] sm:w-[315px] h-[90px] rounded-[30px] ml-[20px] ${
                id === Id
                  ? "bg-[#172EDB] text-[#ffff]"
                  : "bg-gradient-to-tr from-[#ffff] to-[#7081FE]"
              } 
              mb-4  focus:outline-0  flex justify-center items-center pt-3`}
            >
              <div>
                <img
                  className="w-[76px] h-[78px] object-none mx-[17px]"
                  src={image}
                  alt={title}
                />
              </div>

              <div>
                <p className="font-[Segoe UI] text-[11px] mb-[5px] font-black">
                  {title}
                </p>
                <p className="font-[Segoe UI] w-[197px] h-[45px] text-[11px] mb-[5px] font-normal mr-2">
                  {paragraph}
                </p>
              </div>
            </button>
          ))}
      </div>
      <Link to="/detailedprodut">
        <div className="flex justify-end ml-[20px] m-5">
          <div className="flex items-center justify-center w-[50px] h-[50px] bg-[#3D54FF] rounded-full">
            <BsFillArrowRightCircleFill className="text-center w-[25px] h-[25px] text-[#FFFFFF]  " />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Searchproduct;
