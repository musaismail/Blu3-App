import React, { useState, useEffect } from "react";
import IMG1 from "../../images/image1.png";
import IMG2 from "../../images/image2.png";
import IMG3 from "../../images/image3.png";
import IMG4 from "../../images/image4.png";
import IMG5 from "../../images/image5.png";
import IMG6 from "../../images/image6.png";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";

const data = [
  {
    id: 0,
    image: IMG1,
    title: "Coffe Like and Love",
    price: "$120",
    payment_status: "waiting",
  },
  {
    id: 1,
    image: IMG2,
    title: "Tea Nice",
    price: "$120",
    payment_status: "waiting",
  },
  {
    id: 2,
    image: IMG3,
    title: "Coffe Thor",
    price: "$120",
    payment_status: "waiting",
  },
  {
    id: 3,
    image: IMG4,
    title: "Tea Healthy",
    price: "$120",
    payment_status: "waiting",
  },
  {
    id: 4,
    image: IMG5,
    title: "Coffe Health",
    price: "$120",
    payment_status: "waiting",
  },
  {
    id: 5,
    image: IMG6,
    title: "Coffe Like and Love",
    price: "$120",
    payment_status: "waiting",
  },
];

function LikeProduct() {
  const [Id, setId] = useState("");
  const [favorite, setFavorite] = useState([]);
  const getArray = JSON.parse(localStorage.getItem("favorite") || "0");

  useEffect(() => {
    if (getArray !== 0) {
      setFavorite([...getArray]);
    }
  }, []);

  const addFav = (props) => {
    console.log(props);
    let array = favorite;
    let addArray = true;
    array.map((item, key) => {
      if (item === props.i) {
        array.splice(key, 1);
        addArray = false;
      }
    });
    if (addArray) {
      array.push(props.i);
    }
    setFavorite([...array]);
    localStorage.setItem("favorite", JSON.stringify(favorite));

    var storage = localStorage.getItem("favItem" + props.t || "0");
    if (storage == null) {
      localStorage.setItem("favItem" + props.t, JSON.stringify(props.t));
    } else {
      localStorage.removeItem("favItem" + props.t);
    }
  };

  const handleClick = (id) => {
    const selectedItem = data[id];
    localStorage.setItem("my_clickedproduct", JSON.stringify(selectedItem));
    setId(id);
  };
  return (
    <div>
      <>
        <div className="flex justify-center">
          <div>
            {data.map((product, i) => (
              <div className="relative" key={product.id}>
                <button
                  onClick={() => {
                    handleClick(product.id);
                    setId(product.id);
                  }}
                  className={` w-[280px] sm:w-[315px] focus:outline-0 h-[90px] rounded-[30px] ml-[20px] ${
                    product.id === Id
                      ? "bg-[#172EDB] text-[#ffff]"
                      : "bg-gradient-to-tr from-[#ffff] to-[#7081FE] "
                  } 
          mb-4  flex justify-center items-center pt-3`}
                >
                  <div>
                    <img
                      className="w-[76px] h-[43px] object-none mx-[17px]"
                      src={product.image}
                      alt={product.title}
                    />
                  </div>

                  <div>
                    <p className="font-[Segoe UI] text-[11px] mb-[5px] font-black">
                      {product.title}
                    </p>
                    <p className="font-[Segoe UI] w-[197px]  text-[11px] mb-[5px] font-normal mr-2">
                      price: {product.price}
                    </p>
                    <p className="font-[Segoe UI] w-[197px]  text-[11px] mb-[5px] font-normal mr-2">
                      payment status:
                      <p className="inline-block text-[#F7FF00]">
                        {product.payment_status}
                      </p>
                    </p>
                  </div>
                </button>

                <div className="flex justify-end absolute bottom-[-10px] right-[-5px]">
                  {favorite.includes(i) ? (
                    <IoIosHeart
                      size={32}
                      onClick={() => addFav({ product, i })}
                      style={{ color: "red" }}
                    />
                  ) : (
                    <IoIosHeartEmpty
                      size={32}
                      onClick={() => addFav({ product, i })}
                      style={{ color: "red" }}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    </div>
  );
}

export default LikeProduct;
