import React from "react";

const Favorite = () => {
  var favList = [{}];
  const getArray = JSON.parse(localStorage.getItem("favorite") || "0");
  for (var i = 0; i < getArray.length; i++) {
    let x = getArray[i];
    favList[i] = JSON.parse(localStorage.getItem("favItem" + [x]) || "{}");
  }

  return (
    <div>
      {favList.map((favproduct, i) => (
        <div key={i}>
          <div>{favproduct.image}</div>

          <div>
            <p className="font-[Segoe UI] text-[11px] mb-[5px] font-black">
              {favproduct.title}
            </p>
            <p className="font-[Segoe UI] w-[197px]  text-[11px] mb-[5px] font-normal mr-2">
              price: {favproduct.price}
            </p>
            <p className="font-[Segoe UI] w-[197px]  text-[11px] mb-[5px] font-normal mr-2">
              payment status:
              <p className="inline-block text-[#F7FF00]">
                {favproduct.payment_status}
              </p>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Favorite;
