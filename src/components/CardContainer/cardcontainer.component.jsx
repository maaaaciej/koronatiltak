import Card from '../Card/card.component'
import AdCard from '../Card/adcard.component'

import tiltak from '../../data/data.js'

import './cardcontainer.style.scss'

const CardContainer = () => {
  return (
    <div className='container'>
      {tiltak.map(({ text, status, icon }) =>
        status === 'reklame' ? (
          <AdCard key={text} text={text} status={status} icon={icon} />
        ) : (
          <Card key={text} text={text} status={status} icon={icon} />
        )
      )}
    </div>
  )
}

export default CardContainer
