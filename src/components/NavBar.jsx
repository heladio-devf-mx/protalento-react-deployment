import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='#'>Router App</a>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar-nav'>
            <NavLink
              className='nav-link active'
              aria-current='page'
              to='/'
            >
              Home
            </NavLink>
            <NavLink
              className='nav-link'
              to='/about'
            >
              About
            </NavLink>
            <a className='nav-link disabled' aria-disabled='true'>Disabled link</a>
            {/* <a className='nav-link' href='#'>Pricing</a> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
