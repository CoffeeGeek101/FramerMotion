import style from "./pizza.css";

export default function Pizza({pizza}) {
  return (
    <div className="pizza">
        <div className="pizza-container">
            <h1>Thank you for the Order</h1>
            <p>You order a {pizza.base} Pizza with</p>
            {pizza.topping.map(top=> <div key={top}>{top}</div>)}
        </div>
    </div>
  )
}
