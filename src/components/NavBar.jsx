import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='#'>
          Protalento 64
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <NavLink className='nav-link active link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover' aria-current='page' to='/'>
                Inicio
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/about'>
                ¿Quiénes somos?
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/terminos'>
                Términos y Condiciones
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover' to='/categories'>
                Categorías
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
