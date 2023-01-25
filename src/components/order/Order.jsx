import React from 'react'
import style from "./order.css";
import { Link } from 'react-router-dom';
export default function Order() {
  return (
    <div className='order'>
        <div className='order-container'>
            <h2>Create your Pizza!!</h2>
            <Link to="/base">
            <button className='btn'>Start Ordering!</button>
            </Link>
        </div>
    </div>
  )
}
