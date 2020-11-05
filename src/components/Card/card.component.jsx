import './card.style.scss';

const Card = ( { icon, status, text } ) => {
  return (
    <div className='card'>
      <img src={ icon } alt='icon' className='icon' />
      <h3 className={ status ? "mandatory" : "recommended" }>{ status ? "Påbud/Forbud" : "Anbefaling" }</h3>
      <p>
        { text }
      </p>
    </div>
  );
};

export default Card;
