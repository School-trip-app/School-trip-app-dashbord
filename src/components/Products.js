import React, { useEffect } from 'react'
import '../styles/ProductCard.css';
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
      <Nav />
      <div className='main'>
        <h1>Add Product</h1>
        <section className='packages'>
          <form className='formproduct' onSubmit={(e) => { add(e) }}>
            <div className='col-1'>
              <input className='inputproduct' type="text" name="name" placeholder='Name of product :' />
              <input className='inputproduct' type="text" name="discreption" placeholder='Discreption of product :' />
              <input className='inputproduct' type="number" name="price" placeholder='Price of product :' />
            </div>
            <div className='col-2'>
              <div className='selectproduct' >
                <label className='inputproduct' for="category">Category:</label>
                <select className='inputproduct-select' id="category">
                  <option value="sea">Sea</option>
                  <option value="desert">Desert</option>
                  <option value="mountain">Mountain</option>
                </select>
              </div>
              <input className='inputproduct' type="text" name="image" placeholder='Image link of product :' />
              <input className='submitproduct' type="submit" value="Submit" />
            </div>
          </form>
        </section>
      </div>
    </div>
  )

}
export default Product;