import { Link } from "react-router-dom";
import style from "./toppings.css";

export default function Toppings({getToppings, pizza}) {
    const toppings = ["extra cheese", "mayo", "jalapino"];
  return (
    <div className="toppings">
        <div className="top-container">
            <h1>Select for Toppings!!</h1>
            <ul>
                {
                    toppings.map(topping=>{
                        let spanClass = pizza.topping.includes(topping) ? "active" : "";
                        return(
                            <li key={topping} onClick={()=>{getToppings(topping)}}>
                                <span className={spanClass}>{topping}</span>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
                <div>
                    <Link to="/pizza">
                    <button>Place Order</button>
                    </Link>
                </div>    
    </div>
  )
}
