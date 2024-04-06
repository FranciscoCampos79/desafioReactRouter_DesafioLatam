import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg bg-danger text-light'>
      <div className='container-fluid d-flex flex-row-reverse'>
        <span className='me-5 h3'>Happy Cake<img src='https://qrcd.org/4tvz' className='iconos' /></span>
        <div className='d-flex'>
          <Link to='/' className='nav-link ps-5'><img src='https://qrcd.org/4tvh' className='iconos' />Home</Link>
          <Link to='/Contacto' className='nav-link ps-5'><img src='https://qrcd.org/4tw2' className='iconos' />Contacto</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
