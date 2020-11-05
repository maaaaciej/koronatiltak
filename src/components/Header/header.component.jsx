import './header.style.scss'

const Header = ({isWholeNorway}) => {
  return (
    <header className='header'>
      <h1 className="title">KoronaTiltak</h1>
      <h2>Oversikt over gjeldende koronatiltak i {isWholeNorway ? "Norge" : "Oslo"}</h2>
    </header>
  )
}

export default Header
