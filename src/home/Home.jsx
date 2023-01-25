import style from "./home.css";
import Header from '../components/header/Header'
import Order from "../components/order/Order";
export default function Home() {
  return (
    <div className='home'>
      <Order/>
    </div>
  )
}
