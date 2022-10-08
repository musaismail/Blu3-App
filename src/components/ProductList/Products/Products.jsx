import React,{useState} from 'react';
import IMG1 from '../../../images/image1.png';
import IMG2 from '../../../images/image2.png';
import IMG3 from '../../../images/image3.png';
import IMG4 from '../../../images/image4.png';
import IMG5 from '../../../images/image5.png';
import IMG6 from '../../../images/image6.png';
import Stripecontainer from '../../paymentform/Stripecontainer';

const data = [
  {
    id: 0,
    image: IMG1,
    title: 'Coffe Like and Love',
    price: '$120',
    payment_status: 'waiting',
  },
  {
    id: 1,
    image: IMG2,
    title: 'Tea Nice',
    price: '$120',
    payment_status: 'waiting',
  },
  {
    id: 2,
    image: IMG3,
    title: 'Coffe Thor',
    price: '$120',
    payment_status: 'waiting',
  },
  {
    id: 3,
    image: IMG4,
    title: 'Tea Healthy',
    price: '$120',
    payment_status: 'waiting',
  },
  {
    id: 4,
    image: IMG5,
    title: 'Coffe Health',
    price: '$120',
    payment_status: 'waiting',
  },
  {
    id: 5,
    image: IMG6,
    title: 'Coffe Like and Love',
    price: '$120',
    payment_status: 'waiting',
  },
];

function Products() {
  const [showItem, setShowItem] = useState(false);
  const [Id, setId] = useState("");
  
   

 
  
  
 
 
  const handleClick = (id) => {
    const selectedItem = data[id];
   localStorage.setItem("my_clickedproduct", JSON.stringify(selectedItem));
    setId(id);
  };
  return ( 
<div>
    {showItem ? (
      <div className="flex items-center justify-center text-center" ><Stripecontainer /></div>
    ) : (
      <>
        <div className="flex justify-center">
      <div>
        
        {
        data.map((t,i) => (
          <div className='relative' key={t.id} >
          <button   onClick={() => {
            handleClick(t.id);
            setId(t.id);
          }}
          className={` w-[280px] sm:w-[315px] focus:outline-0 h-[90px] rounded-[30px] ml-[20px] ${
            t.id === Id
              ? "bg-[#172EDB] text-[#ffff]"
              : "bg-gradient-to-tr from-[#ffff] to-[#7081FE] " 
          } 
          mb-4  flex justify-center items-center pt-3`}>
            <div>
              <img className="w-[76px] h-[43px] object-none mx-[17px]" src={t.image} alt={t.title} />
            </div>
          
            <div>
              <p className="font-[Segoe UI] text-[11px] mb-[5px] font-black">{t.title}</p>
              <p className="font-[Segoe UI] w-[197px]  text-[11px] mb-[5px] font-normal mr-2">price: {t.price}</p>
              <p className="font-[Segoe UI] w-[197px]  text-[11px] mb-[5px] font-normal mr-2">payment status: <p className='inline-block text-[#F7FF00]'>{t.payment_status}</p></p>
            </div>
           
           </button>
           </div>
        ))
      }
      
      <div className=' text-center'><button onClick={() => setShowItem(true)} className='w-[180px] sm:w-[207px] h-[58px] bg-gradient-to-b from-[#7384FE] to-[#A8A8A8] 
      text-[25px] text-center text-[#FFFFFF] rounded-full font-semibold'>Pay Now</button></div>
      </div>
    </div>
      </>
    )}
</div> 
  );
}

export default Products;
