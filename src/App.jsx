import  cardimg_one from "./img/card_one.png";
import { Render } from "./components/card/card";
import card_star from "./img/card_star.svg"
import card__nauwnik from "./img/card__nauwnik.svg"
import card__book from "./img/card__book.svg"
function App() {

  return (
    <>
      <Render title = "SIYOSAT, FANTASTIKA">
        <img className="card__img" src={cardimg_one} alt="" />
        <h3 className="card__title">1984</h3>
        <img className="card__star" src={card_star} alt="" />
        <p className="card__star_number">4.7</p>  
        <img className="card__books" src={card__nauwnik} alt="" />
        <img className="card__books" src={card__book} alt="" />
      </Render>
    </>
  )
}

export default App
