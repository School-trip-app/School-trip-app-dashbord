import React, { useEffect } from 'react'
import '../styles/ProductCard.css';
import SearchIcon from '@mui/icons-material/Search';
import ManIcon from '@mui/icons-material/Man';
import FlightIcon from '@mui/icons-material/Flight';
import BedroomChildIcon from '@mui/icons-material/BedroomChild';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import { useSelector, useDispatch } from "react-redux";
import { addproductAsync, getproductAsync, selectProduct } from "../store/products-re";
import Nav from './Nav';

function Product() {

  const dispatch = useDispatch();
  const products = useSelector(selectProduct);
  console.log(products);

  const add = (e) => {
    e.preventDefault();

    dispatch(addproductAsync({
      name: e.target.name.value,
      image: e.target.image.value,
      price: e.target.price.value,
      discreption: e.target.discreption.value,
      category: e.target.category.value
    }
    ));
    e.target.reset();
  };

  useEffect(() => {
    dispatch(getproductAsync());
  }, [dispatch]);



  return (
    <div className='prod'>
    <Nav/>
    <div className='main'>
                <div className='calender'>
                    <input type='text' placeholder='Search' style={{ width: '300px' }} />
                    <select>
                        <option>20 012020- 24-02.2020</option>
                    </select>
                    <ul>
                        <li>
                            <SearchIcon />
                        </li>
                        <li>
                            <ManIcon />
                        </li>
                        <li>
                            <FlightIcon />
                        </li>
                        <li>
                            <BedroomChildIcon />
                        </li>
                        <li>
                            <BatteryChargingFullIcon />
                        </li>
                    </ul>
                </div>
                <section className='top-background-product'>
        <p>Store </p>
      </section>
      <section className='packages'>


          <form className='formproduct' onSubmit={(e) => { add(e) }}>

            <div className='col-1'>
              <input className='inputproduct' type="text" name="name" placeholder='Name of product :' />
              <input className='inputproduct' type="text" name="discreption" placeholder='discreption of product :' />
              <input className='inputproduct' type="number" name="price" placeholder='price of product :' />
            </div>

            <div className='col-2'>

              <div className='selectproduct' >
              <label className='inputproduct'  for="category">Category:</label>
              <select className='inputproduct' id="category">
                <option value="sea">sea</option>
                <option value="desert">desert</option>
                <option value="mountain">mountain</option>
              </select>
              </div>

              <input className='inputproduct' type="text" name="image" placeholder='image link of product :' />
              <input  className='submitproduct' type="submit" value="Submit" />

            </div>

          </form>

      </section>
     
            </div>
    </div>
  )

}
export default Product;