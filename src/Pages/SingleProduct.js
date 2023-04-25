import React from 'react'
import { UseGlobalContext } from '../Context/ProductsContext';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Pagination from '../Components/Pagination';
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { Button } from '../Components/Button';
import Image from '../Components/Image';
import Stars from '../Components/Stars';
import FormatPrice from '../Components/FormatPrice';
import AddToCart from '../Components/AddToCart';


const api = process.env.REACT_APP_API_URL

const SingleProduct = () => {
  const { singleProduct, getSingleProducts, loadProducts } = UseGlobalContext();

  // console.log(singleProduct);

  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   const mediaQuery = window.matchMedia("(max-width: 768px)");
  //   setIsMobile(mediaQuery.matches);

  //   const handleMediaQueryChange = (e) => {
  //     setIsMobile(e.matches);
  //   };

  //   mediaQuery.addEventListener("change", handleMediaQueryChange);

  //   return () => {
  //     mediaQuery.removeEventListener("change", handleMediaQueryChange);
  //   };
  // }, []);

  const {
    id: alias,
    name,
    company,
    price,
    description,
    category,
    stock,
    stars,
    reviews,
    image,
    colors,
  } = singleProduct;

  const { id } = useParams()

  useEffect(() => {

    getSingleProducts(`${api}?id=${id}`)

  }, [])

  if (loadProducts) {

    return <h1>Loading Information...</h1>

  }

  return (
    <>

      <Pagination name={name} />

      <Wrapper className='container'>

        <div className="box">

          <div className="images">

            <Image images={image} />

          </div>

          <div className="text">

            <h1>{name}</h1>

            <div className="userData">
              <Stars stars={stars} reviews={reviews} />
            </div>

            <div className="price">
              MRP:<del><FormatPrice price={price + 250000} /></del>
              <p>Deal of the Day: <FormatPrice price={price} /></p>
            </div>

            <div className="description">
              {/* {isMobile ? description.slice(0,77) : description} */}
              <p>{description}</p>
            </div>


            <div className="delivery">
              <div className="del-1 del">
                <TbTruckDelivery className='icon' />
                <p>Free Delivery</p>
              </div>
              <div className="del-2 del">
                <MdSecurity className='icon' />
                <p>30 Days Replacement</p>
              </div>
              <div className="del-3 del">
                <GiReceiveMoney className='icon' />
                <p>Product Delivered</p>
              </div>
              <div className="del-4 del">
                <RiSecurePaymentLine className='icon' />
                <p>2 Year Warranty</p>
              </div>

            </div>

            <hr />

            <div className="stock">
              <p>Available: {stock > 0 ? " In Stock" : "Out of Stock"}</p>
              <p>ID : {id}</p>
              <p>Brand : {company}</p>
            </div>

            <hr />

            {stock > 0 && <AddToCart product={singleProduct} />}

          </div>

        </div>

      </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
.box {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  .images {
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    gap: 3rem;
    .multi-image{
      display: flex;
      flex-direction: column;
      gap: 3rem;
      img{
        max-width: 20rem;
        cursor: pointer;
      }
    }
    .main-image{
      img{
        max-width: 40rem;
        cursor: pointer;
      }
    }
  }
  .text {
    h1 {
      font-size: 3.5rem;
      color: ${({ theme }) => theme.colors.primary};
      margin-bottom: 1rem;
    }
    .userData{
      display: flex;
      align-items: center;
      gap: 2rem;
      font-size: 2rem;
      margin-bottom: 1rem;
    }
    .price{
      font-size: 2rem;
      margin-bottom: 1rem;
    }
    .description{
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
    .delivery{
      display: grid;
      grid-template-columns: repeat(4,1fr);
      gap: 2rem;
      /* margin-bottom: 1rem; */
      place-items: center;
      .icon {
        font-size: 4rem;
      }
      .del {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-size: 1.5rem;
      }
    }
    .stock{
      font-size: 1.5rem;
      margin: 1rem 0;
    }
  }
}

@media (max-width: ${({ theme }) => theme.media.tab}) {
  .box {
    grid-template-columns: 1fr;
  .images {
    grid-template-columns: 1fr;
  
    .multi-image{
      flex-direction: row;
      img{
        max-width: 8rem;
      }
    }
    .main-image{
  
      img{
        max-width: 30rem;
      }
    }
  }
}
}



`

export default SingleProduct;