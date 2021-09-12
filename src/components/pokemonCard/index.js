import style from './stylesheet.module.css';
import cardBack from '../../card-back-side.jpg'
import { useState } from 'react';
const PokemonCard = (props) => {
  const [isActive, setActive] = useState(false);
  const handler = () => setActive(!isActive)
  return (
    <div className={style.root} onClick={handler}>
      <div className={`${style.pokemonCard} ${isActive? style.active:''}`}>
        <div className={style.cardFront}>
          <div className={`${style.wrap} ${style.front}`}>
            <div className={`${style.pokemon} ${props.type}`}>
              <div className={style.values}>
                <div className={`${style.count} ${style.top}`}>{props.values.top}</div>
                <div className={`${style.count} ${style.right}`}>{props.values.right}</div>
                <div className={`${style.count} ${style.bottom}`}>{props.values.bottom}</div>
                <div className={`${style.count} ${style.left}`}> { props.values.left }</div>
            </div>
            <div className={style.imgContainer}>
              <img src={props.img} alt={props.name} />
            </div>
            <div className={style.info}>
              <span className={style.number}>#{props.id}</span>
              <h3 className={style.name}>{props.name}</h3>
              <small className={style.type}>Type: <span>{props.type}</span></small>
            </div>
          </div>
        </div>
      </div>

      <div className={style.cardBack}>
        <div className={`${style.wrap} ${style.back}`}>
          <img src={cardBack} alt="Сard Backed" />
        </div>
      </div>
    </div>
    </div >
  )
}
export default PokemonCard