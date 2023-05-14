import { NavLink } from "react-router-dom";

const Title = () => (
    <NavLink to='/'>
      <img
        className="logo"
        src="https://res.cloudinary.com/dk4darniv/image/upload/v1682704900/samples/foodcart-logo_nmkosx.webp"
        alt="not found"
      />
    </NavLink>
  );


const Headercomponent = () => {

  const styles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    color: '#fff',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    fontSize: '16px',
    
  };

  const linkStyles = {
    margin: '10px',
    color: '#212121',
    textDecoration: 'none',
    transition: 'all 0.2s ease-in-out'
  };

  const activeLinkStyles = {
    textDecoration: 'underline'
  };

    return (
      <div  style={styles} className="header">
        <Title />
        <div className="nav-items">
          <ul>
           <NavLink  to='/' style={linkStyles} >
            <li className="li-link">Home</li>
           </NavLink>
          <NavLink to='/' style={linkStyles}>
            
            <li className="li-link">Menu</li>
          </NavLink>
  
            <NavLink to='/about' style={linkStyles} >
            <li className="li-link">About</li>
            </NavLink>
            <NavLink to='/contact' style={linkStyles} >
              <li className="li-link">contact</li>
            </NavLink>
           
            <li className="li-link" style={linkStyles}>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Headercomponent;