import './card.style.scss'
import Beer from '../../assets/beer.svg'

const Card = () => {
  return (
    <div className='card'>
      <img src={Beer} alt='icon' className='icon' />
      <h3>Påbudt</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolor
        vero rerum. A aperiam iure quae facilis, vel minima voluptates?
      </p>
    </div>
  )
}

export default Card
