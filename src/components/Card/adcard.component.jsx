import './card.style.scss'

const AdCard = ({ icon, status, text }) => {
  return (
    <div className='card'>
      <h3 className="ad-title">Reklame</h3>
      <img src={icon} alt='icon' className='ad-icon' />
      <p dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  )
}

export default AdCard
