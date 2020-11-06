import './card.style.scss'

const Card = ({ icon, status, text }) => {
  return (
    <div className='card'>
      <img src={icon} alt='icon' className='icon' />
      <h3 className={status ? 'mandatory' : 'recommended'}>
        {status === 'mandatory' && 'Påbud/Forbud'}
        {!status && "Anbefaling"}
      </h3>
      <p dangerouslySetInnerHTML={{__html:text}}/>
    </div>
  )
}

export default Card
