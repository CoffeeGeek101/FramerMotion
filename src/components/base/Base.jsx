import { Link } from "react-router-dom";
import style from "./base.css";

export default function Base({getBase, pizza}) {
    const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];
  return (
    <div className='base'>
        <div className='base-container'>
            <h2>Select your base</h2>
            <ul>
            {
                bases.map(base=>{
                    let spanClass = pizza.base === base ? 'active' : '';
                    return(
                        <li className={spanClass} key={base} onClick={() => getBase(base)}>
                            <span className={spanClass}>{base}</span>
                        </li>
                    )
                })
            }
            </ul>
        </div>
        {
                pizza.base && (
                    <div>
                        <Link to="/toppings">
                        <button>Next</button>
                        </Link>
                    </div>
                )
            }
    </div>
  )
}
