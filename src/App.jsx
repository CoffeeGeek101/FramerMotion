import style from "./app.css";
import Header from "./components/header/Header";
import Home from './home/Home'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Base from "./components/base/Base";
import { useState } from "react";
import Toppings from "./components/toppings/Toppings";
import Pizza from "./components/pizza/Pizza";

export default function App() {

  const [pizza, setPizza] = useState({base:"", topping:[]});

  const getBase = (base)=>{
    setPizza({...pizza, base})
  }

  const getToppings = (tooping)=>{
    let newToppings;
    if(!pizza.topping.includes(tooping)){
      newToppings = [...pizza.topping, tooping];
    }else{
      newToppings = pizza.topping.filter(item => item !== tooping);
    }
    setPizza({...pizza, topping : newToppings});
  }

  return (
    <Router>
      <Header/>
    <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/base" element={<Base getBase={getBase} pizza={pizza}/>}/>
          <Route path="/toppings" element={<Toppings getToppings={getToppings} pizza={pizza} />}/>
          <Route path="/pizza" element={<Pizza pizza={pizza}/>}/>
        </Routes>
    </div>
    </Router>
  )
}
